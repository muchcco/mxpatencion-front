import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent {
  public readonly isLoading$ = this.loadingService.isLoading$;

  public constructor(private readonly loadingService: LoadingService) {}
}
