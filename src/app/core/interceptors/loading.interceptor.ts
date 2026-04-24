import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SKIP_GLOBAL_LOADING } from '../models/http-context-tokens.model';
import { ApiBaseService } from '../services/api-base.service';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  public constructor(
    private readonly apiBaseService: ApiBaseService,
    private readonly loadingService: LoadingService
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const shouldTrack =
      this.apiBaseService.isApiRequest(request.url) &&
      !request.context.get(SKIP_GLOBAL_LOADING);

    if (shouldTrack) {
      this.loadingService.show();
    }

    return next.handle(request).pipe(
      finalize(() => {
        if (shouldTrack) {
          this.loadingService.hide();
        }
      })
    );
  }
}
