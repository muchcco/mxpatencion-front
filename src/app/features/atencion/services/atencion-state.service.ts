import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asesor } from '../../../core/models/asesor.model';
import { SessionContextService } from '../../../core/services/session-context.service';
import { EntidadVisible, ServicioCatalogo } from '../../catalogos/models/catalogo.model';
import { Atencion } from '../models/atencion.model';
import { Ciudadano } from '../models/ciudadano.model';

export type CiudadanoLookupStatus =
  | 'idle'
  | 'searching-local'
  | 'searching-pide'
  | 'manual'
  | 'saving-manual'
  | 'found'
  | 'starting-attention'
  | 'attention-started'
  | 'error';

export interface AtencionState {
  status: CiudadanoLookupStatus;
  ciudadano: Ciudadano | null;
  atencion: Atencion | null;
  entidad: EntidadVisible | null;
  servicio: ServicioCatalogo | null;
  message: string | null;
  currentRoute: string | null;
  serviceMonitor: ServiceMonitorState | null;
}

export interface ServiceMonitorState {
  visible: boolean;
  url: string | null;
  startedAtMs: number | null;
  startedAtLabel: string | null;
}

const INITIAL_STATE: AtencionState = {
  status: 'idle',
  ciudadano: null,
  atencion: null,
  entidad: null,
  servicio: null,
  message: 'Busca al ciudadano para iniciar una atencion.',
  currentRoute: null,
  serviceMonitor: null
};

const STORAGE_KEY = 'mexpres.atencion.resume';

@Injectable({
  providedIn: 'root'
})
export class AtencionStateService {
  private readonly stateSubject = new BehaviorSubject<AtencionState>(INITIAL_STATE);
  private currentAdvisorKey: string | null = null;
  private hydrating = false;

  public readonly state$ = this.stateSubject.asObservable();

  public constructor(
    private readonly sessionContextService: SessionContextService
  ) {
    this.sessionContextService.state$.subscribe((session) => {
      if (session.status !== 'authenticated' || !session.asesor) {
        this.currentAdvisorKey = null;
        return;
      }

      const advisorKey = this.resolveAdvisorKey(session.asesor);

      if (advisorKey !== this.currentAdvisorKey) {
        this.currentAdvisorKey = advisorKey;
        this.restorePersistedState();
      }
    });
  }

  public get snapshot(): AtencionState {
    return this.stateSubject.value;
  }

  public get resumeRoute(): string | null {
    const state = this.snapshot;

    if (!state.ciudadano || !state.atencion) {
      return null;
    }

    return state.currentRoute || '/atencion';
  }

  public hasActiveAttention(): boolean {
    const state = this.snapshot;
    return Boolean(state.ciudadano && state.atencion);
  }

  public setStatus(status: CiudadanoLookupStatus, message: string): void {
    this.patch({
      status,
      message
    });
  }

  public startLookup(status: 'searching-local' | 'searching-pide', message: string): void {
    this.patch({
      status,
      ciudadano: null,
      atencion: null,
      entidad: null,
      servicio: null,
      currentRoute: '/atencion',
      serviceMonitor: null,
      message
    });
  }

  public enableManual(message: string): void {
    this.patch({
      status: 'manual',
      ciudadano: null,
      atencion: null,
      entidad: null,
      servicio: null,
      currentRoute: '/atencion',
      serviceMonitor: null,
      message
    });
  }

  public setFound(ciudadano: Ciudadano, message: string): void {
    this.patch({
      status: 'found',
      ciudadano,
      atencion: null,
      entidad: null,
      servicio: null,
      currentRoute: '/atencion',
      serviceMonitor: null,
      message
    });
  }

  public setAttentionStarted(atencion: Atencion, message: string): void {
    this.patch({
      status: 'attention-started',
      atencion,
      entidad: null,
      servicio: null,
      serviceMonitor: null,
      message
    });
  }

  public setEntidadSelected(
    entidad: EntidadVisible,
    atencion: Atencion,
    message: string
  ): void {
    this.patch({
      atencion,
      entidad,
      servicio: null,
      serviceMonitor: null,
      message
    });
  }

  public setServicioSelected(
    servicio: ServicioCatalogo,
    atencion: Atencion,
    message: string
  ): void {
    this.patch({
      atencion,
      servicio,
      message
    });
  }

  public setError(message: string): void {
    this.patch({
      status: 'error',
      message
    });
  }

  public setCurrentRoute(route: string): void {
    this.patch({
      currentRoute: route
    });
  }

  public setServiceMonitor(serviceMonitor: ServiceMonitorState | null): void {
    this.patch({
      serviceMonitor
    });
  }

  public reset(): void {
    this.stateSubject.next(INITIAL_STATE);
    this.persistState(INITIAL_STATE);
  }

  private patch(partial: Partial<AtencionState>): void {
    const nextState = {
      ...this.stateSubject.value,
      ...partial
    };

    this.stateSubject.next(nextState);
    this.persistState(nextState);
  }

  private restorePersistedState(): void {
    const advisorKey = this.currentAdvisorKey;

    if (!advisorKey) {
      return;
    }

    const persistedStore = this.readPersistedStore();
    const persistedState = persistedStore[advisorKey];

    if (!persistedState) {
      this.hydrating = true;
      this.stateSubject.next(INITIAL_STATE);
      this.hydrating = false;
      return;
    }

    this.hydrating = true;
    this.stateSubject.next(this.normalizeState(persistedState));
    this.hydrating = false;
  }

  private persistState(state: AtencionState): void {
    if (this.hydrating) {
      return;
    }

    const advisorKey = this.currentAdvisorKey;

    if (!advisorKey || !this.canUseStorage()) {
      return;
    }

    const persistedStore = this.readPersistedStore();

    if (!this.shouldPersistState(state)) {
      delete persistedStore[advisorKey];
      this.writePersistedStore(persistedStore);
      return;
    }

    persistedStore[advisorKey] = this.normalizeState(state);
    this.writePersistedStore(persistedStore);
  }

  private shouldPersistState(state: AtencionState): boolean {
    return Boolean(state.ciudadano || state.atencion || state.entidad || state.servicio);
  }

  private normalizeState(state: Partial<AtencionState>): AtencionState {
    return {
      ...INITIAL_STATE,
      ...state,
      currentRoute: state.currentRoute ?? INITIAL_STATE.currentRoute,
      serviceMonitor: state.serviceMonitor ?? INITIAL_STATE.serviceMonitor
    };
  }

  private readPersistedStore(): Record<string, AtencionState> {
    if (!this.canUseStorage()) {
      return {};
    }

    try {
      const rawStore = window.localStorage.getItem(STORAGE_KEY);

      if (!rawStore) {
        return {};
      }

      return JSON.parse(rawStore) as Record<string, AtencionState>;
    } catch (error) {
      console.error('[AtencionStateService] Error leyendo estado persistido', error);
      return {};
    }
  }

  private writePersistedStore(store: Record<string, AtencionState>): void {
    if (!this.canUseStorage()) {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (error) {
      console.error('[AtencionStateService] Error persistiendo estado', error);
    }
  }

  private resolveAdvisorKey(asesor: Asesor): string {
    return String(
      asesor.email || asesor.documento || asesor.id || asesor.nombreCompleto
    );
  }

  private canUseStorage(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
