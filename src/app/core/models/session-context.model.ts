import { Asesor } from './asesor.model';

export type SessionStatus =
  | 'idle'
  | 'loading'
  | 'authenticated'
  | 'anonymous'
  | 'error';

export interface SessionContextState {
  status: SessionStatus;
  asesor: Asesor | null;
  initialized: boolean;
  message: string | null;
}
