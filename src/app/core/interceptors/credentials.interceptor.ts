import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiBaseService } from '../services/api-base.service';

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  public constructor(private readonly apiBaseService: ApiBaseService) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const isApiRequest = this.apiBaseService.isApiRequest(request.url);

    if (!isApiRequest || request.withCredentials) {
      return next.handle(request);
    }

    return next.handle(
      request.clone({
        withCredentials: true
      })
    );
  }
}
