import { ChangeDetectionStrategy, Component, output, ViewEncapsulation } from '@angular/core';
import { announcement } from '../../../../data/announcement';
import { news } from '../../../../data/news';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-guideline',
  imports: [IonIcon],
  templateUrl: './guideline.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuidelineComponent {
  readonly announcement = announcement;
  readonly news = news;
  readonly sendConversion = output<void>();

  handleConversion() {
    this.sendConversion.emit();
  }
}
