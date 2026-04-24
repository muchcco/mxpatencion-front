import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
  private readonly apiPrefix = environment.apiBaseUrl.replace(/\/+$/, '');

  public buildUrl(path: string): string {
    const cleanPath = path.replace(/^\/+/, '');
    return `${this.apiPrefix}/${cleanPath}`;
  }

  public isApiRequest(url: string): boolean {
    try {
      const requestUrl = new URL(url, window.location.origin);
      const apiUrl = new URL(this.apiPrefix, window.location.origin);
      return requestUrl.pathname.startsWith(apiUrl.pathname);
    } catch {
      return url.startsWith(this.apiPrefix);
    }
  }

  public unwrap<T>(response: ApiResponse<T>): T {
    return response.data;
  }
}
