import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastTone = 'success' | 'info' | 'warning' | 'danger';

export interface ToastMessage {
  id: number;
  tone: ToastTone;
  title: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastSequence = 0;
  private readonly messagesSubject = new BehaviorSubject<ToastMessage[]>([]);

  public readonly messages$ = this.messagesSubject.asObservable();

  public success(title: string, description?: string): void {
    this.push('success', title, description);
  }

  public info(title: string, description?: string): void {
    this.push('info', title, description);
  }

  public warning(title: string, description?: string): void {
    this.push('warning', title, description);
  }

  public error(title: string, description?: string): void {
    this.push('danger', title, description);
  }

  public dismiss(id: number): void {
    this.messagesSubject.next(
      this.messagesSubject.value.filter((message) => message.id !== id)
    );
  }

  private push(tone: ToastTone, title: string, description?: string): void {
    const message: ToastMessage = {
      id: ++this.toastSequence,
      tone,
      title,
      description
    };

    this.messagesSubject.next([...this.messagesSubject.value, message]);
    window.setTimeout(() => this.dismiss(message.id), 5000);
  }
}
