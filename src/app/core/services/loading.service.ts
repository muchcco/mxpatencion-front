import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private activeRequests = 0;
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);

  public readonly isLoading$ = this.loadingSubject.asObservable();

  public show(): void {
    this.activeRequests += 1;
    if (!this.loadingSubject.value) {
      this.loadingSubject.next(true);
    }
  }

  public hide(): void {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    if (this.activeRequests === 0 && this.loadingSubject.value) {
      this.loadingSubject.next(false);
    }
  }

  public reset(): void {
    this.activeRequests = 0;
    this.loadingSubject.next(false);
  }
}
