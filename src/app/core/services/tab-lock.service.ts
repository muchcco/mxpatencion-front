import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const TAB_LOCK_BLOCKED_MESSAGE =
  'La aplicación ya está abierta en otra ventana o pestaña. Cierra la otra ventana para continuar.';

type TabLockStatus = 'checking' | 'active' | 'blocked';
export type TabLockBlockReason = 'active-tab' | 'backend-session-active';

export interface TabLockState {
  status: TabLockStatus;
  tabId: string;
  activeTabId: string | null;
  reason: TabLockBlockReason | null;
  message: string | null;
  heartbeatAt: number | null;
}

interface StoredTabLock {
  appId: string;
  tabId: string;
  createdAt: number;
  heartbeatAt: number;
  url: string;
}

interface TabLockChannelMessage {
  type: 'lock-acquired' | 'lock-released' | 'heartbeat' | 'backend-blocked';
  tabId: string;
}

const APP_ID = 'mexpres-atencion-frontend';
const TAB_ID_STORAGE_KEY = `${APP_ID}:tab-id`;
const BACKEND_BLOCKED_STORAGE_KEY = `${APP_ID}:backend-blocked`;
const LOCK_STORAGE_KEY = `${APP_ID}:active-tab-lock`;
const CHANNEL_NAME = `${APP_ID}:tab-lock`;
const HEARTBEAT_INTERVAL_MS = 7000;
const BLOCKED_RETRY_INTERVAL_MS = 5000;
const LOCK_STALE_AFTER_MS = 25000;

const INITIAL_TAB_LOCK_STATE: TabLockState = {
  status: 'checking',
  tabId: '',
  activeTabId: null,
  reason: null,
  message: null,
  heartbeatAt: null
};

@Injectable({
  providedIn: 'root'
})
export class TabLockService {
  private readonly stateSubject =
    new BehaviorSubject<TabLockState>(INITIAL_TAB_LOCK_STATE);

  public readonly state$ = this.stateSubject.asObservable();

  private tabId = '';
  private initialized = false;
  private backendBlocked = false;
  private heartbeatTimerId: ReturnType<typeof window.setInterval> | null = null;
  private blockedRetryTimerId: ReturnType<typeof window.setInterval> | null = null;
  private broadcastChannel: BroadcastChannel | null = null;

  public get snapshot(): TabLockState {
    return this.stateSubject.value;
  }

  public get isBlocked(): boolean {
    return this.snapshot.status === 'blocked';
  }

  public get canUseApp(): boolean {
    return this.snapshot.status === 'active';
  }

  public initialize(): void {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.tabId = this.resolveTabId();
    this.backendBlocked =
      window.sessionStorage.getItem(BACKEND_BLOCKED_STORAGE_KEY) === 'true';

    this.stateSubject.next({
      ...INITIAL_TAB_LOCK_STATE,
      tabId: this.tabId
    });

    this.registerListeners();

    if (this.backendBlocked) {
      this.blockCurrentTab(
        'backend-session-active',
        TAB_LOCK_BLOCKED_MESSAGE,
        this.readLock()?.tabId ?? null
      );
      return;
    }

    this.tryAcquireLock();
  }

  public retryAcquire(): boolean {
    this.initialize();
    return this.tryAcquireLock();
  }

  public releaseLock(): void {
    this.stopHeartbeat();

    const currentLock = this.readLock();

    if (currentLock?.tabId === this.tabId) {
      window.localStorage.removeItem(LOCK_STORAGE_KEY);
      this.publish('lock-released');
    }
  }

  public blockFromBackend(): boolean {
    this.initialize();

    if (this.backendBlocked && this.snapshot.reason === 'backend-session-active') {
      return false;
    }

    this.releaseLock();
    this.backendBlocked = true;
    window.sessionStorage.setItem(BACKEND_BLOCKED_STORAGE_KEY, 'true');
    this.stopBlockedRetry();
    this.blockCurrentTab(
      'backend-session-active',
      TAB_LOCK_BLOCKED_MESSAGE,
      this.readLock()?.tabId ?? null
    );
    this.publish('backend-blocked');

    return true;
  }

  public clearBackendBlock(): void {
    this.backendBlocked = false;
    window.sessionStorage.removeItem(BACKEND_BLOCKED_STORAGE_KEY);
  }

  private tryAcquireLock(): boolean {
    if (this.backendBlocked) {
      this.blockCurrentTab(
        'backend-session-active',
        TAB_LOCK_BLOCKED_MESSAGE,
        this.readLock()?.tabId ?? null
      );
      return false;
    }

    const now = Date.now();
    const currentLock = this.readLock();

    if (
      currentLock &&
      currentLock.tabId !== this.tabId &&
      !this.isStale(currentLock, now)
    ) {
      this.blockCurrentTab(
        'active-tab',
        TAB_LOCK_BLOCKED_MESSAGE,
        currentLock.tabId
      );
      return false;
    }

    const nextLock: StoredTabLock = {
      appId: APP_ID,
      tabId: this.tabId,
      createdAt: currentLock?.tabId === this.tabId ? currentLock.createdAt : now,
      heartbeatAt: now,
      url: window.location.href
    };

    window.localStorage.setItem(LOCK_STORAGE_KEY, JSON.stringify(nextLock));

    const confirmedLock = this.readLock();

    if (confirmedLock?.tabId !== this.tabId) {
      this.blockCurrentTab(
        'active-tab',
        TAB_LOCK_BLOCKED_MESSAGE,
        confirmedLock?.tabId ?? currentLock?.tabId ?? null
      );
      return false;
    }

    this.stopBlockedRetry();
    this.startHeartbeat();
    this.stateSubject.next({
      status: 'active',
      tabId: this.tabId,
      activeTabId: this.tabId,
      reason: null,
      message: null,
      heartbeatAt: confirmedLock.heartbeatAt
    });
    this.publish('lock-acquired');

    return true;
  }

  private startHeartbeat(): void {
    if (this.heartbeatTimerId) {
      return;
    }

    this.heartbeatTimerId = window.setInterval(() => {
      this.refreshHeartbeat();
    }, HEARTBEAT_INTERVAL_MS);
  }

  private stopHeartbeat(): void {
    if (!this.heartbeatTimerId) {
      return;
    }

    window.clearInterval(this.heartbeatTimerId);
    this.heartbeatTimerId = null;
  }

  private refreshHeartbeat(): void {
    const currentLock = this.readLock();

    if (currentLock?.tabId !== this.tabId) {
      this.stopHeartbeat();
      this.blockCurrentTab(
        'active-tab',
        TAB_LOCK_BLOCKED_MESSAGE,
        currentLock?.tabId ?? null
      );
      return;
    }

    const nextLock: StoredTabLock = {
      ...currentLock,
      heartbeatAt: Date.now(),
      url: window.location.href
    };

    window.localStorage.setItem(LOCK_STORAGE_KEY, JSON.stringify(nextLock));
    this.stateSubject.next({
      ...this.snapshot,
      heartbeatAt: nextLock.heartbeatAt
    });
    this.publish('heartbeat');
  }

  private startBlockedRetry(): void {
    if (this.blockedRetryTimerId || this.backendBlocked) {
      return;
    }

    this.blockedRetryTimerId = window.setInterval(() => {
      this.tryAcquireLock();
    }, BLOCKED_RETRY_INTERVAL_MS);
  }

  private stopBlockedRetry(): void {
    if (!this.blockedRetryTimerId) {
      return;
    }

    window.clearInterval(this.blockedRetryTimerId);
    this.blockedRetryTimerId = null;
  }

  private blockCurrentTab(
    reason: TabLockBlockReason,
    message: string,
    activeTabId: string | null
  ): void {
    this.stopHeartbeat();

    this.stateSubject.next({
      status: 'blocked',
      tabId: this.tabId,
      activeTabId,
      reason,
      message,
      heartbeatAt: this.readLock()?.heartbeatAt ?? null
    });

    if (reason === 'active-tab') {
      this.startBlockedRetry();
    }
  }

  private registerListeners(): void {
    window.addEventListener('storage', this.handleStorageEvent);
    window.addEventListener('beforeunload', this.handleUnload);
    window.addEventListener('pagehide', this.handleUnload);
    window.addEventListener('pageshow', this.handlePageShow);

    if ('BroadcastChannel' in window) {
      this.broadcastChannel = new BroadcastChannel(CHANNEL_NAME);
      this.broadcastChannel.addEventListener('message', this.handleChannelMessage);
    }
  }

  private readonly handleUnload = (): void => {
    this.releaseLock();
  };

  private readonly handlePageShow = (): void => {
    if (!this.backendBlocked) {
      this.tryAcquireLock();
    }
  };

  private readonly handleStorageEvent = (event: StorageEvent): void => {
    if (event.key === LOCK_STORAGE_KEY) {
      this.reconcileLockState();
    }
  };

  private readonly handleChannelMessage = (
    event: MessageEvent<TabLockChannelMessage>
  ): void => {
    const message = event.data;

    if (!message || message.tabId === this.tabId) {
      return;
    }

    this.reconcileLockState();
  };

  private reconcileLockState(): void {
    if (this.backendBlocked) {
      return;
    }

    const currentLock = this.readLock();
    const now = Date.now();

    if (currentLock?.tabId === this.tabId) {
      if (this.snapshot.status !== 'active') {
        this.stopBlockedRetry();
        this.startHeartbeat();
        this.stateSubject.next({
          status: 'active',
          tabId: this.tabId,
          activeTabId: this.tabId,
          reason: null,
          message: null,
          heartbeatAt: currentLock.heartbeatAt
        });
      }

      return;
    }

    if (!currentLock || this.isStale(currentLock, now)) {
      this.tryAcquireLock();
      return;
    }

    this.blockCurrentTab(
      'active-tab',
      TAB_LOCK_BLOCKED_MESSAGE,
      currentLock.tabId
    );
  }

  private readLock(): StoredTabLock | null {
    const rawLock = window.localStorage.getItem(LOCK_STORAGE_KEY);

    if (!rawLock) {
      return null;
    }

    try {
      const parsedLock = JSON.parse(rawLock) as Partial<StoredTabLock>;

      if (
        parsedLock.appId !== APP_ID ||
        typeof parsedLock.tabId !== 'string' ||
        typeof parsedLock.heartbeatAt !== 'number' ||
        typeof parsedLock.createdAt !== 'number'
      ) {
        return null;
      }

      return {
        appId: parsedLock.appId,
        tabId: parsedLock.tabId,
        createdAt: parsedLock.createdAt,
        heartbeatAt: parsedLock.heartbeatAt,
        url: typeof parsedLock.url === 'string' ? parsedLock.url : ''
      };
    } catch {
      window.localStorage.removeItem(LOCK_STORAGE_KEY);
      return null;
    }
  }

  private isStale(lock: StoredTabLock, now: number): boolean {
    return now - lock.heartbeatAt > LOCK_STALE_AFTER_MS;
  }

  private publish(type: TabLockChannelMessage['type']): void {
    this.broadcastChannel?.postMessage({
      type,
      tabId: this.tabId
    });
  }

  private resolveTabId(): string {
    const storedTabId = window.sessionStorage.getItem(TAB_ID_STORAGE_KEY);

    if (storedTabId) {
      return storedTabId;
    }

    const nextTabId =
      window.crypto?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    window.sessionStorage.setItem(TAB_ID_STORAGE_KEY, nextTabId);
    return nextTabId;
  }
}
