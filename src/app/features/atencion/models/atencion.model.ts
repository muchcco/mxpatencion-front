export interface Atencion {
  id: number | string;
  estado: string;
  codigoAtencion?: string | null;
  tokenAtencion?: string | null;
  ciudadanoId?: number | string | null;
  entidadId?: number | string | null;
  servicioId?: number | string | null;
  operadorNombre?: string | null;
  fechaInicioAtencion?: string | null;
  fechaSeleccionEntidad?: string | null;
  fechaSeleccionServicio?: string | null;
  urlServicio?: string | null;
  urlRetorno?: string | null;
}

export interface CrearAtencionPayload {
  ciudadanoId?: number | string | null;
}

export interface SeleccionarEntidadPayload {
  entidadId: number | string;
}

export interface SeleccionarServicioPayload {
  servicioId: number | string;
}

export interface RetornoAtencionPayload {
  observacion?: string | null;
  urlRetorno?: string | null;
}
