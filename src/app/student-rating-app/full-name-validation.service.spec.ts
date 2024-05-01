import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { FullNameValidationService } from './full-name-validation.service';

describe('FullNameValidationService', () => {
  let service: FullNameValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullNameValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null for valid full name', () => {
    const control = new FormControl('John Doe', Validators.compose([FullNameValidationService.validFullName]));
    expect(FullNameValidationService.validFullName(control)).toBeNull();
  });

  it('should return invalidFullName for invalid full name', () => {
    const control = new FormControl('John123', Validators.compose([FullNameValidationService.validFullName]));
    expect(FullNameValidationService.validFullName(control)).toEqual({ 'invalidFullName': true });
  });
});
