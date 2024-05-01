import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StudentRatingAppPage } from './student-rating-app.page';

describe('StudentRatingAppPage', () => {
  let component: StudentRatingAppPage;
  let fixture: ComponentFixture<StudentRatingAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentRatingAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
