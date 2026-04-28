import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiErrorInterceptor } from './interceptors/api-error.interceptor';
import { CredentialsInterceptor } from './interceptors/credentials.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { TabLockInterceptor } from './interceptors/tab-lock.interceptor';
import { TabLockService } from './services/tab-lock.service';

function initializeTabLock(tabLockService: TabLockService): () => void {
  return () => tabLockService.initialize();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTabLock,
      deps: [TabLockService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TabLockInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  public constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule should only be imported once.');
    }
  }
}
