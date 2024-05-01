import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return error message for empty full name', () => {
    const errorMessage = service.validateFullName('');
    expect(errorMessage).toBe('ПІБ студента не може бути порожнім!');
  });

  it('should return error message for invalid full name format', () => {
    const errorMessage = service.validateFullName('John');
    expect(errorMessage).toBe('ПІБ студента повинно містити ім\'я, прізвище та по батькові, розділені пробілом!');
  });

  it('should return error message for empty group', () => {
    const errorMessage = service.validateGroup('');
    expect(errorMessage).toBe('Група студента не може бути порожньою!');
  });

  it('should return error message for invalid group format', () => {
    const errorMessage = service.validateGroup('Group123');
    expect(errorMessage).toBe('Група студента повинна мати формат великих літер, дефісу та до трьох цифр, наприклад, "AB-123"!');
  });

  it('should return error message for invalid grade', () => {
    const errorMessage = service.validateGrade(-10);
    expect(errorMessage).toBe('Оцінка повинна бути числом від 0 до 100!');
  });

  it('should return empty string for valid full name', () => {
    const errorMessage = service.validateFullName('John Doe Smith');
    expect(errorMessage).toBe('');
  });

  it('should return empty string for valid group', () => {
    const errorMessage = service.validateGroup('AB-123');
    expect(errorMessage).toBe('');
  });

  it('should return empty string for valid grade', () => {
    const errorMessage = service.validateGrade(85);
    expect(errorMessage).toBe('');
  });
});
