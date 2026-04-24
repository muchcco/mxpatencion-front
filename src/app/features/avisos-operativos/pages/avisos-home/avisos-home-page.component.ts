import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvisoOperativoView } from '../../../../shared/components/aviso-operativo-item/aviso-operativo-item.component';

@Component({
  selector: 'app-avisos-home-page',
  templateUrl: './avisos-home-page.component.html',
  styleUrls: ['./avisos-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvisosHomePageComponent {
  public readonly avisos: AvisoOperativoView[] = [];
}
