import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSkeletonComponent {
  @Input() public lines = 4;
  @Input() public compact = false;

  public get lineIndexes(): number[] {
    return Array.from({ length: this.lines }, (_, index) => index);
  }
}
