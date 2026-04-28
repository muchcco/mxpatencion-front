export type CiudadanoFuente = 'LOCAL' | 'PIDE' | 'MANUAL' | string;

export interface Ciudadano {
  id?: number | string;
  nombres: string;
  tipoDocumentoId?: number | string | null;
  apellidoPaterno?: string | null;
  apellidoMaterno?: string | null;
  apellidos?: string | null;
  numeroDocumento?: string | null;
  tipoDocumento?: string | null;
  sexo?: string | null;
  direccion?: string | null;
  fotoUrl?: string | null;
  fuente?: CiudadanoFuente;
  fuenteOrigenInicial?: CiudadanoFuente | null;
  fuenteUltimaActualizacion?: CiudadanoFuente | null;
}

export interface BuscarCiudadanoPayload {
  tipoDocumentoId: number | string;
  numeroDocumento: string;
}

export interface RegistrarCiudadanoManualPayload {
  tipoDocumentoId: number | string;
  numeroDocumento: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  sexo: string;
  apellidos?: string;
}

export type CiudadanoLookupNextAction =
  | 'CONSULT_PIDE'
  | 'CONSULT_PIDE_REFRESH_PHOTO'
  | 'ENABLE_MANUAL'
  | string
  | null;

export interface CiudadanoLookupResult {
  ciudadano: Ciudadano | null;
  message: string;
  nextAction: CiudadanoLookupNextAction;
  canRefreshFromPide: boolean;
}
