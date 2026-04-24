export interface TipoDocumento {
  id_tipo_documento: number;
  codigo: string;
  nombre: string;
  longitud_min?: number | null;
  longitud_max?: number | null;
  requiere_numerico?: boolean | number | null;
  estado?: string | number | boolean | null;
}

export interface EntidadVisible {
  id: number | string;
  codigo?: string | null;
  nombre: string;
  alcance: 'CENTRAL' | 'REGIONAL' | 'LOCAL' | string;
  region?: string | null;
  descripcion?: string | null;
  logoUrl?: string | null;
}

export interface ServicioCatalogo {
  id: number | string;
  nombre: string;
  descripcion?: string | null;
  canal?: string | null;
  disponibilidad?: string | null;
  url?: string | null;
  urlRetorno?: string | null;
  logoUrl?: string | null;
}
