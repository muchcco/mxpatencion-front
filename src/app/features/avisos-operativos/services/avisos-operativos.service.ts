import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiResponse } from '../../../core/models/api-response.model';
import { ApiBaseService } from '../../../core/services/api-base.service';
import {
  ActualizarEstadoAvisoPayload,
  AvisoOperativo,
  CrearAvisoOperativoPayload
} from '../models/aviso-operativo.model';

@Injectable({
  providedIn: 'root'
})
export class AvisosOperativosService {
  private readonly recentCache = new Map<number, Observable<AvisoOperativo[]>>();

  public constructor(
    private readonly http: HttpClient,
    private readonly apiBaseService: ApiBaseService
  ) {}

  public listarRecientes(
    limit = 6,
    force = false
  ): Observable<AvisoOperativo[]> {
    if (!force && this.recentCache.has(limit)) {
      return this.recentCache.get(limit)!;
    }

    const params = new HttpParams().set('limit', String(limit));

    const request$ = this.http
      .get<ApiResponse<AvisoOperativo[]>>(
        this.apiBaseService.buildUrl('avisos-operativos'),
        {
          params
        }
      )
      .pipe(
        map((response) => this.apiBaseService.unwrap(response)),
        shareReplay(1)
      );

    this.recentCache.set(limit, request$);
    return request$;
  }

  public crear(payload: CrearAvisoOperativoPayload): Observable<AvisoOperativo> {
    return this.http
      .post<ApiResponse<AvisoOperativo>>(
        this.apiBaseService.buildUrl('avisos-operativos'),
        payload
      )
      .pipe(
        map((response) => this.apiBaseService.unwrap(response)),
        map((aviso) => {
          this.recentCache.clear();
          return aviso;
        })
      );
  }

  public actualizarEstado(
    avisoId: number | string,
    payload: ActualizarEstadoAvisoPayload
  ): Observable<AvisoOperativo> {
    return this.http
      .patch<ApiResponse<AvisoOperativo>>(
        this.apiBaseService.buildUrl(`avisos-operativos/${avisoId}/estado`),
        payload
      )
      .pipe(map((response) => this.apiBaseService.unwrap(response)));
  }
}
