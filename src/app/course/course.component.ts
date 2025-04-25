import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { IMenu } from '../types';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {
  readonly title = input.required<string>();
  readonly item = input.required<IMenu>();
}
