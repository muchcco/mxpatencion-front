import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmModalComponent {
  @Input() public visible = false;
  @Input() public title = 'Confirmar accion';
  @Input() public description = 'Confirma si deseas continuar.';
  @Input() public confirmLabel = 'Confirmar';
  @Input() public cancelLabel = 'Cancelar';

  @Output() public confirmed = new EventEmitter<void>();
  @Output() public cancelled = new EventEmitter<void>();
}
