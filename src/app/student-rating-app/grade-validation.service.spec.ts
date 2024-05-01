import { TestBed } from '@angular/core/testing';

import { GradeValidationService } from './grade-validation.service';
import { FormControl, Validators } from '@angular/forms';

describe('GradeValidationService', () => {
  let service: GradeValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return null for valid grade within range', () => {
    const control = new FormControl('80', Validators.compose([GradeValidationService.validGrade]));
    expect(GradeValidationService.validGrade(control)).toBeNull();
  });

  it('should return null for valid grade as lower boundary', () => {
    const control = new FormControl('0', Validators.compose([GradeValidationService.validGrade]));
    expect(GradeValidationService.validGrade(control)).toBeNull();
  });

  it('should return null for valid grade as upper boundary', () => {
    const control = new FormControl('100', Validators.compose([GradeValidationService.validGrade]));
    expect(GradeValidationService.validGrade(control)).toBeNull();
  });

  it('should return invalidGrade for invalid grade (below lower boundary)', () => {
    const control = new FormControl('-10', Validators.compose([GradeValidationService.validGrade]));
    expect(GradeValidationService.validGrade(control)).toEqual({ 'invalidGrade': true });
  });

  it('should return invalidGrade for invalid grade (above upper boundary)', () => {
    const control = new FormControl('150', Validators.compose([GradeValidationService.validGrade]));
    expect(GradeValidationService.validGrade(control)).toEqual({ 'invalidGrade': true });
  });

  it('should return invalidGrade for invalid grade (not a number)', () => {
    const control = new FormControl('abc', Validators.compose([GradeValidationService.validGrade]));
    expect(GradeValidationService.validGrade(control)).toEqual({ 'invalidGrade': true });
  });
});
