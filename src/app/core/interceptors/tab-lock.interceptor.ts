import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ApiBaseService } from '../services/api-base.service';
import {
  TAB_LOCK_BLOCKED_MESSAGE,
  TabLockService
} from '../services/tab-lock.service';

@Injectable()
export class TabLockInterceptor implements HttpInterceptor {
  public constructor(
    private readonly apiBaseService: ApiBaseService,
    private readonly tabLockService: TabLockService
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.tabLockService.initialize();

    if (this.apiBaseService.isApiRequest(request.url) && this.tabLockService.isBlocked) {
      return throwError(
        () =>
          new HttpErrorResponse({
            error: {
              message: TAB_LOCK_BLOCKED_MESSAGE,
              meta: {
                reason: 'TAB_LOCK_BLOCKED'
              }
            },
            status: 0,
            statusText: 'TAB_LOCK_BLOCKED',
            url: request.url
          })
      );
    }

    return next.handle(request);
  }
}
