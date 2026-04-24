import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SessionContextService } from '../../../../core/services/session-context.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHomePageComponent {
  public readonly session$ = this.sessionContextService.state$;

  public constructor(
    private readonly sessionContextService: SessionContextService
  ) {}
}
