import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablepagePage } from './observablepage.page';

describe('ObservablepagePage', () => {
  let component: ObservablepagePage;
  let fixture: ComponentFixture<ObservablepagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObservablepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

