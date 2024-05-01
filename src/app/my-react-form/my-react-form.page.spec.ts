import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MyReactFormPage } from './my-react-form.page';

describe('MyReactFormPage', () => {
  let component: MyReactFormPage;
  let fixture: ComponentFixture<MyReactFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyReactFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
