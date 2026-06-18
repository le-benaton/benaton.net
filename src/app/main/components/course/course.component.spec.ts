import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { IMenu } from '../../../../config/types';

const mockMenu: IMenu = {
  title: 'Test Course',
  subTitle: 'Test Subtitle',
  price: '¥1,000',
  image: '/assets/test.jpg',
  menu: ['Item 1', 'Item 2'],
};

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Lunch');
    fixture.componentRef.setInput('item', mockMenu);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
