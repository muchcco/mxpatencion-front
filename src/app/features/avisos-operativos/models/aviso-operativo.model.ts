export interface AvisoOperativo {
  id: number | string;
  titulo: string;
  descripcion: string;
  severidad: 'alta' | 'media' | 'baja' | string;
  entidadNombre?: string | null;
  servicioNombre?: string | null;
  createdAt?: string | null;
  estado?: string | null;
  urlReportada?: string | null;
}

export interface CrearAvisoOperativoPayload {
  tipoFalla: string;
  severidad: string;
  titulo: string;
  descripcion: string;
  urlReportada?: string | null;
  servicioId?: number | string | null;
  entidadId?: number | string | null;
}

export interface ActualizarEstadoAvisoPayload {
  estado: string;
}
