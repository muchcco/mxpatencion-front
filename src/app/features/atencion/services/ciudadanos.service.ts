import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../../../core/models/api-response.model';
import { ApiBaseService } from '../../../core/services/api-base.service';
import {
  BuscarCiudadanoPayload,
  Ciudadano,
  CiudadanoLookupResult,
  RegistrarCiudadanoManualPayload
} from '../models/ciudadano.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadanosService {
  public constructor(
    private readonly http: HttpClient,
    private readonly apiBaseService: ApiBaseService
  ) {}

  public buscar(
    payload: BuscarCiudadanoPayload
  ): Observable<CiudadanoLookupResult> {
    const finalPayload = this.buildBuscarPayload(payload);

    if (!finalPayload) {
      return throwError(
        () => new Error('Payload invalido: tipoDocumentoId y numeroDocumento son requeridos.')
      );
    }

    console.debug('[CiudadanosService] Payload final buscar', finalPayload);

    return this.http
      .post<ApiResponse<Ciudadano | null>>(this.apiBaseService.buildUrl('ciudadanos/buscar'), finalPayload)
      .pipe(map((response) => this.mapLookupResponse(response)));
  }

  public consultarPide(
    payload: BuscarCiudadanoPayload
  ): Observable<CiudadanoLookupResult> {
    const finalPayload = this.buildBuscarPayload(payload);

    if (!finalPayload) {
      return throwError(
        () => new Error('Payload invalido: tipoDocumentoId y numeroDocumento son requeridos.')
      );
    }

    console.debug('[CiudadanosService] Payload final consultarPide', finalPayload);

    return this.http
      .post<ApiResponse<Ciudadano | null>>(
        this.apiBaseService.buildUrl('ciudadanos/consultar-pide'),
        finalPayload
      )
      .pipe(map((response) => this.mapLookupResponse(response)));
  }

  public registrarManual(
    payload: RegistrarCiudadanoManualPayload
  ): Observable<Ciudadano> {
    const finalPayload = this.buildManualPayload(payload);

    console.debug('[CiudadanosService] Payload final manual', finalPayload);

    return this.http
      .post<ApiResponse<Ciudadano>>(
        this.apiBaseService.buildUrl('ciudadanos/manual'),
        finalPayload
      )
      .pipe(
        map((response) =>
          this.normalizeCiudadano(this.apiBaseService.unwrap(response))
        )
      );
  }

  private mapLookupResponse(
    response: ApiResponse<Ciudadano | null>
  ): CiudadanoLookupResult {
    const nextAction = this.normalizeNextAction(response.meta);
    const canRefreshFromPide = this.normalizeCanRefreshFromPide(response.meta);

    return {
      ciudadano: response.data ? this.normalizeCiudadano(response.data) : null,
      message: response.message || '',
      nextAction,
      canRefreshFromPide
    };
  }

  private buildBuscarPayload(
    payload: BuscarCiudadanoPayload
  ): BuscarCiudadanoPayload | null {
    const tipoDocumentoId = this.normalizeId(payload.tipoDocumentoId);
    const numeroDocumento = payload.numeroDocumento?.trim();

    if (!tipoDocumentoId || !numeroDocumento) {
      return null;
    }

    return {
      tipoDocumentoId,
      numeroDocumento
    };
  }

  private buildManualPayload(
    payload: RegistrarCiudadanoManualPayload
  ): RegistrarCiudadanoManualPayload {
    const apellidoPaterno = payload.apellidoPaterno?.trim() || '';
    const apellidoMaterno = payload.apellidoMaterno?.trim() || '';

    return {
      tipoDocumentoId: payload.tipoDocumentoId,
      numeroDocumento: payload.numeroDocumento?.trim() || '',
      nombres: payload.nombres?.trim() || '',
      apellidoPaterno,
      apellidoMaterno,
      sexo: payload.sexo?.trim() || '',
      apellidos: [apellidoPaterno, apellidoMaterno].filter(Boolean).join(' ')
    };
  }

  private normalizeCiudadano(ciudadano: Ciudadano): Ciudadano {
    const rawCiudadano = ciudadano as Ciudadano & {
      id_ciudadano?: number | string | null;
      id_tipo_documento?: number | string | null;
      apellido_paterno?: string | null;
      apellido_materno?: string | null;
      numero_documento?: string | null;
      tipo_documento?: string | null;
      direccion_actual?: string | null;
      foto_url?: string | null;
      fuente_origen_inicial?: string | null;
      fuente_ultima_actualizacion?: string | null;
      fuente_origen?: string | null;
    };

    const apellidoPaterno = this.cleanString(
      rawCiudadano.apellidoPaterno ?? rawCiudadano.apellido_paterno
    );
    const apellidoMaterno = this.cleanString(
      rawCiudadano.apellidoMaterno ?? rawCiudadano.apellido_materno
    );
    const apellidos =
      this.cleanString(rawCiudadano.apellidos) ||
      [apellidoPaterno, apellidoMaterno].filter(Boolean).join(' ') ||
      null;
    const tipoDocumentoId =
      this.normalizeId(
        rawCiudadano.tipoDocumentoId ?? rawCiudadano.id_tipo_documento
      ) ?? null;
    const fuenteOrigenInicial = this.cleanString(
      rawCiudadano.fuenteOrigenInicial ??
        rawCiudadano.fuente_origen_inicial ??
        rawCiudadano.fuente_origen
    );
    const fuenteUltimaActualizacion = this.cleanString(
      rawCiudadano.fuenteUltimaActualizacion ??
        rawCiudadano.fuente_ultima_actualizacion
    );
    const fuente =
      this.cleanString(rawCiudadano.fuente) ||
      fuenteUltimaActualizacion ||
      fuenteOrigenInicial;

    return {
      ...rawCiudadano,
      id: rawCiudadano.id ?? rawCiudadano.id_ciudadano ?? undefined,
      nombres: rawCiudadano.nombres?.trim() || '',
      tipoDocumentoId,
      apellidoPaterno,
      apellidoMaterno,
      apellidos,
      numeroDocumento: this.cleanString(
        rawCiudadano.numeroDocumento ?? rawCiudadano.numero_documento
      ),
      tipoDocumento: this.cleanString(
        rawCiudadano.tipoDocumento ?? rawCiudadano.tipo_documento
      ),
      sexo: this.cleanString(rawCiudadano.sexo),
      direccion: this.cleanString(
        rawCiudadano.direccion ?? rawCiudadano.direccion_actual
      ),
      fotoUrl: this.normalizeImageUrl(rawCiudadano.fotoUrl ?? rawCiudadano.foto_url),
      fuente: fuente || undefined,
      fuenteOrigenInicial,
      fuenteUltimaActualizacion
    };
  }

  private normalizeNextAction(
    meta: Record<string, unknown> | null | undefined
  ): string | null {
    const rawValue = meta?.['next_action'] ?? meta?.['nextAction'];
    return typeof rawValue === 'string' ? rawValue : null;
  }

  private normalizeCanRefreshFromPide(
    meta: Record<string, unknown> | null | undefined
  ): boolean {
    const rawValue =
      meta?.['can_refresh_from_pide'] ?? meta?.['canRefreshFromPide'];
    return this.normalizeBoolean(rawValue);
  }

  private normalizeId(
    value: number | string | null | undefined
  ): number | null {
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      value === 'undefined' ||
      value === 'null'
    ) {
      return null;
    }

    const parsedValue = Number(value);
    return Number.isFinite(parsedValue) ? parsedValue : null;
  }

  private cleanString(value: string | null | undefined): string | null {
    const normalizedValue = value?.trim();
    return normalizedValue ? normalizedValue : null;
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

  private normalizeBoolean(value: unknown): boolean {
    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'number') {
      return value === 1;
    }

    if (typeof value === 'string') {
      const normalizedValue = value.trim().toLowerCase();
      return normalizedValue === '1' || normalizedValue === 'true';
    }

    return false;
  }
}
