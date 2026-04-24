export interface Asesor {
  id: number | string;
  nombres: string;
  apellidos: string;
  nombreCompleto: string;
  email?: string | null;
  documento?: string | null;
  regionCodigo?: string | null;
  regionNombre?: string | null;
  sedeNombre?: string | null;
  cargo?: string | null;
  roles?: string[] | null;
  permissions?: string[] | null;
}
