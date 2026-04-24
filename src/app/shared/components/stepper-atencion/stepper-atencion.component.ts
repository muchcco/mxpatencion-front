import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TrackByUtil } from '../../utils/track-by.util';

export interface StepperStep {
  label: string;
  hint?: string;
}

@Component({
  selector: 'app-stepper-atencion',
  templateUrl: './stepper-atencion.component.html',
  styleUrls: ['./stepper-atencion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperAtencionComponent {
  @Input() public steps: StepperStep[] = [];
  @Input() public currentIndex = 0;

  public readonly trackByIndex = TrackByUtil.index;
}
