import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast-stack',
  templateUrl: './toast-stack.component.html',
  styleUrls: ['./toast-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastStackComponent {
  public readonly messages$ = this.notificationService.messages$;

  public constructor(
    private readonly notificationService: NotificationService
  ) {}

  public dismiss(id: number): void {
    this.notificationService.dismiss(id);
  }
}
