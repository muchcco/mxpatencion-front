import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Asesor } from '../models/asesor.model';
import { SessionContextState } from '../models/session-context.model';

const INITIAL_SESSION_STATE: SessionContextState = {
  status: 'idle',
  asesor: null,
  initialized: false,
  message: null
};

@Injectable({
  providedIn: 'root'
})
export class SessionContextService {
  private readonly stateSubject =
    new BehaviorSubject<SessionContextState>(INITIAL_SESSION_STATE);

  public readonly state$ = this.stateSubject.asObservable();

  public get snapshot(): SessionContextState {
    return this.stateSubject.value;
  }

  public setLoading(message = 'Validando sesion institucional...'): void {
    this.patchState({
      status: 'loading',
      message
    });
  }

  public setAuthenticated(
    asesor: Asesor,
    message = 'Sesion institucional validada.'
  ): void {
    this.patchState({
      status: 'authenticated',
      asesor,
      initialized: true,
      message
    });
  }

  public setAnonymous(message = 'No se encontro una sesion valida.'): void {
    this.patchState({
      status: 'anonymous',
      asesor: null,
      initialized: true,
      message
    });
  }

  public setError(message = 'No fue posible validar la sesion.'): void {
    this.patchState({
      status: 'error',
      initialized: true,
      message
    });
  }

  public reset(): void {
    this.stateSubject.next(INITIAL_SESSION_STATE);
  }

  private patchState(partialState: Partial<SessionContextState>): void {
    this.stateSubject.next({
      ...this.stateSubject.value,
      ...partialState
    });
  }
}
