import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../../../core/models/api-response.model';
import { ApiBaseService } from '../../../core/services/api-base.service';
import {
  Atencion,
  CrearAtencionPayload,
  RetornoAtencionPayload,
  SeleccionarEntidadPayload,
  SeleccionarServicioPayload
} from '../models/atencion.model';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {
  public constructor(
    private readonly http: HttpClient,
    private readonly apiBaseService: ApiBaseService
  ) {}

  public crear(payload: CrearAtencionPayload): Observable<Atencion> {
    const finalPayload = this.buildCrearPayload(payload);

    console.debug('[AtencionService] Payload final crear', finalPayload);

    return this.http
      .post<ApiResponse<Atencion>>(
        this.apiBaseService.buildUrl('atenciones'),
        finalPayload
      )
      .pipe(
        map((response) =>
          this.normalizeAtencion(this.apiBaseService.unwrap(response))
        )
      );
  }

  public iniciar(atencionId: number | string): Observable<Atencion> {
    return this.http
      .post<ApiResponse<Atencion>>(
        this.apiBaseService.buildUrl(`atenciones/${atencionId}/iniciar`),
        {}
      )
      .pipe(
        map((response) =>
          this.normalizeAtencion(this.apiBaseService.unwrap(response))
        )
      );
  }

  public seleccionarEntidad(
    atencionId: number | string,
    payload: SeleccionarEntidadPayload
  ): Observable<Atencion> {
    const finalPayload = this.buildSeleccionarEntidadPayload(payload);

    return this.http
      .post<ApiResponse<Atencion>>(
        this.apiBaseService.buildUrl(
          `atenciones/${atencionId}/seleccionar-entidad`
        ),
        finalPayload
      )
      .pipe(
        map((response) =>
          this.normalizeAtencion(this.apiBaseService.unwrap(response))
        )
      );
  }

  public seleccionarServicio(
    atencionId: number | string,
    payload: SeleccionarServicioPayload
  ): Observable<Atencion> {
    const finalPayload = this.buildSeleccionarServicioPayload(payload);

    return this.http
      .post<ApiResponse<Atencion>>(
        this.apiBaseService.buildUrl(
          `atenciones/${atencionId}/seleccionar-servicio`
        ),
        finalPayload
      )
      .pipe(
        map((response) =>
          this.normalizeAtencion(this.apiBaseService.unwrap(response))
        )
      );
  }

  public retorno(
    atencionId: number | string,
    payload: RetornoAtencionPayload
  ): Observable<Atencion> {
    const finalPayload = this.buildRetornoPayload(payload);

    return this.http
      .post<ApiResponse<Atencion>>(
        this.apiBaseService.buildUrl(`atenciones/${atencionId}/retorno`),
        finalPayload
      )
      .pipe(
        map((response) =>
          this.normalizeAtencion(this.apiBaseService.unwrap(response))
        )
      );
  }

  public finalizar(atencionId: number | string): Observable<Atencion> {
    return this.http
      .post<ApiResponse<Atencion>>(
        this.apiBaseService.buildUrl(`atenciones/${atencionId}/finalizar`),
        {}
      )
      .pipe(
        map((response) =>
          this.normalizeAtencion(this.apiBaseService.unwrap(response))
        )
      );
  }

  private buildCrearPayload(
    payload: CrearAtencionPayload
  ): { id_ciudadano: number | string } {
    return {
      id_ciudadano: payload.ciudadanoId as number | string
    };
  }

  private buildSeleccionarEntidadPayload(
    payload: SeleccionarEntidadPayload
  ): { id_entidad: number | string } {
    return {
      id_entidad: payload.entidadId
    };
  }

  private buildSeleccionarServicioPayload(
    payload: SeleccionarServicioPayload
  ): { id_servicio: number | string } {
    return {
      id_servicio: payload.servicioId
    };
  }

  private buildRetornoPayload(
    payload: RetornoAtencionPayload
  ): { observacion?: string | null; url_retorno?: string | null } {
    return {
      observacion: payload.observacion ?? null,
      url_retorno: payload.urlRetorno ?? null
    };
  }

  private normalizeAtencion(atencion: Atencion): Atencion {
    const rawAtencion = atencion as Atencion & {
      id_atencion?: number | string | null;
      codigo_atencion?: string | null;
      token_atencion?: string | null;
      id_ciudadano?: number | string | null;
      id_entidad?: number | string | null;
      id_servicio?: number | string | null;
      estado_actual?: string | null;
      operador_nombre?: string | null;
      nombre_operador?: string | null;
      fecha_inicio_atencion?: string | null;
      fecha_seleccion_entidad?: string | null;
      fecha_seleccion_servicio?: string | null;
      url_servicio?: string | null;
      url_tramite?: string | null;
      url_externa?: string | null;
      url_retorno?: string | null;
      enlace_servicio?: string | null;
    };

    return {
      ...rawAtencion,
      id: rawAtencion.id ?? rawAtencion.id_atencion ?? '',
      estado: rawAtencion.estado ?? rawAtencion.estado_actual ?? '',
      codigoAtencion:
        rawAtencion.codigoAtencion ?? rawAtencion.codigo_atencion ?? null,
      tokenAtencion:
        rawAtencion.tokenAtencion ?? rawAtencion.token_atencion ?? null,
      ciudadanoId:
        rawAtencion.ciudadanoId ?? rawAtencion.id_ciudadano ?? undefined,
      entidadId: rawAtencion.entidadId ?? rawAtencion.id_entidad ?? undefined,
      servicioId:
        rawAtencion.servicioId ?? rawAtencion.id_servicio ?? undefined,
      operadorNombre:
        rawAtencion.operadorNombre ??
        rawAtencion.operador_nombre ??
        rawAtencion.nombre_operador ??
        null,
      fechaInicioAtencion:
        rawAtencion.fechaInicioAtencion ??
        rawAtencion.fecha_inicio_atencion ??
        null,
      fechaSeleccionEntidad:
        rawAtencion.fechaSeleccionEntidad ??
        rawAtencion.fecha_seleccion_entidad ??
        null,
      fechaSeleccionServicio:
        rawAtencion.fechaSeleccionServicio ??
        rawAtencion.fecha_seleccion_servicio ??
        null,
      urlServicio:
        rawAtencion.urlServicio ??
        rawAtencion.url_servicio ??
        rawAtencion.url_tramite ??
        rawAtencion.url_externa ??
        rawAtencion.enlace_servicio ??
        null,
      urlRetorno:
        rawAtencion.urlRetorno ?? rawAtencion.url_retorno ?? null
    };
  }
}
