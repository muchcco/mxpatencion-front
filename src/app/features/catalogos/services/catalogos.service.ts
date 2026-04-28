import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiResponse } from '../../../core/models/api-response.model';
import { ApiBaseService } from '../../../core/services/api-base.service';
import {
  EntidadVisible,
  ServicioCatalogo,
  TipoDocumento
} from '../models/catalogo.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  private tiposDocumentoRequest$?: Observable<TipoDocumento[]>;
  private entidadesRequest$?: Observable<EntidadVisible[]>;
  private readonly serviciosCache = new Map<number | string, Observable<ServicioCatalogo[]>>();

  public constructor(
    private readonly http: HttpClient,
    private readonly apiBaseService: ApiBaseService
  ) {}

  public getTiposDocumento(force = false): Observable<TipoDocumento[]> {
    if (!force && this.tiposDocumentoRequest$) {
      return this.tiposDocumentoRequest$;
    }

    this.tiposDocumentoRequest$ = this.http
      .get<ApiResponse<TipoDocumento[]>>(
        this.apiBaseService.buildUrl('tipos-documento')
      )
      .pipe(
        map((response) => this.apiBaseService.unwrap(response)),
        shareReplay(1)
      );

    return this.tiposDocumentoRequest$;
  }

  public getEntidadesVisibles(force = false): Observable<EntidadVisible[]> {
    if (!force && this.entidadesRequest$) {
      return this.entidadesRequest$;
    }

    this.entidadesRequest$ = this.http
      .get<ApiResponse<EntidadVisible[]>>(
        this.apiBaseService.buildUrl('entidades/visibles')
      )
      .pipe(
        map((response) =>
          this.apiBaseService.unwrap(response).map((item) => this.normalizeEntidad(item))
        ),
        shareReplay(1)
      );

    return this.entidadesRequest$;
  }

  public getServicios(
    entidadId: number | string,
    force = false
  ): Observable<ServicioCatalogo[]> {
    if (!force && this.serviciosCache.has(entidadId)) {
      return this.serviciosCache.get(entidadId)!;
    }

    const request$ = this.http
      .get<ApiResponse<ServicioCatalogo[]>>(
        this.apiBaseService.buildUrl(`entidades/${entidadId}/servicios`)
      )
      .pipe(
        map((response) =>
          this.apiBaseService.unwrap(response).map((item) => this.normalizeServicio(item))
        ),
        shareReplay(1)
      );

    this.serviciosCache.set(entidadId, request$);
    return request$;
  }

  private normalizeEntidad(entidad: EntidadVisible): EntidadVisible {
    const rawEntidad = entidad as EntidadVisible & {
      id_entidad?: number | string | null;
      nombre_entidad?: string | null;
      codigo?: string | null;
      codigo_entidad?: string | null;
      sigla?: string | null;
      abreviatura?: string | null;
      descripcion_entidad?: string | null;
      region_nombre?: string | null;
      logo_url?: string | null;
      logo?: string | null;
    };

    return {
      ...rawEntidad,
      id: rawEntidad.id ?? rawEntidad.id_entidad ?? '',
      codigo:
        rawEntidad.codigo?.trim() ||
        rawEntidad.codigo_entidad?.trim() ||
        rawEntidad.sigla?.trim() ||
        rawEntidad.abreviatura?.trim() ||
        null,
      nombre:
        rawEntidad.nombre?.trim() ||
        rawEntidad.nombre_entidad?.trim() ||
        'Entidad sin nombre',
      alcance: rawEntidad.alcance || 'CENTRAL',
      region:
        rawEntidad.region?.trim() || rawEntidad.region_nombre?.trim() || null,
      descripcion:
        rawEntidad.descripcion?.trim() ||
        rawEntidad.descripcion_entidad?.trim() ||
        null,
      logoUrl: this.normalizeImageUrl(
        rawEntidad.logoUrl ||
          rawEntidad.logo_url ||
          rawEntidad.logo ||
          null
      )
    };
  }

  private normalizeServicio(servicio: ServicioCatalogo): ServicioCatalogo {
    const rawServicio = servicio as ServicioCatalogo & {
      id_servicio?: number | string | null;
      nombre_servicio?: string | null;
      url_servicio?: string | null;
      url_tramite?: string | null;
      url_externa?: string | null;
      enlace?: string | null;
      link?: string | null;
      url_retorno?: string | null;
      logo_url?: string | null;
      logo?: string | null;
      icono?: string | null;
      icono_url?: string | null;
    };

    return {
      ...rawServicio,
      id: rawServicio.id ?? rawServicio.id_servicio ?? '',
      nombre:
        rawServicio.nombre?.trim() ||
        rawServicio.nombre_servicio?.trim() ||
        'Servicio sin nombre',
      descripcion: rawServicio.descripcion?.trim() || null,
      canal: rawServicio.canal?.trim() || null,
      disponibilidad: rawServicio.disponibilidad?.trim() || null,
      url:
        rawServicio.url?.trim() ||
        rawServicio.url_servicio?.trim() ||
        rawServicio.url_tramite?.trim() ||
        rawServicio.url_externa?.trim() ||
        rawServicio.enlace?.trim() ||
        rawServicio.link?.trim() ||
        null,
      urlRetorno:
        rawServicio.urlRetorno?.trim() || rawServicio.url_retorno?.trim() || null,
      logoUrl: this.normalizeImageUrl(
        rawServicio.logoUrl ||
          rawServicio.logo_url ||
          rawServicio.logo ||
          rawServicio.icono_url ||
          rawServicio.icono ||
          null
      )
    };
  }

  private normalizeImageUrl(value: string | null | undefined): string | null {
    const normalizedValue = value?.trim();

    if (!normalizedValue) {
      return null;
    }

    if (/^https?:\/\//i.test(normalizedValue)) {
      return normalizedValue;
    }

    return normalizedValue;
  }
}
