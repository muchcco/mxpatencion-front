import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TrackByUtil } from '../../utils/track-by.util';
import { AvisoOperativoView } from '../aviso-operativo-item/aviso-operativo-item.component';

@Component({
  selector: 'app-aviso-operativo-list',
  templateUrl: './aviso-operativo-list.component.html',
  styleUrls: ['./aviso-operativo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvisoOperativoListComponent {
  @Input() public avisos: AvisoOperativoView[] = [];
  @Input() public loading = false;
  @Input() public title = 'Avisos operativos recientes';
  @Input() public emptyTitle = 'Sin avisos operativos recientes';
  @Input() public emptyDescription =
    'Los avisos se mostraran aqui como panel institucional, no como chat.';

  public readonly trackById = TrackByUtil.id;
}
