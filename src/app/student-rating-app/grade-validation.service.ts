import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GradeValidationService {

  constructor() { }

  static validGrade(control: AbstractControl): { [key: string]: boolean } | null {
    const grade = parseFloat(control.value);
    return !isNaN(grade) && grade >= 0 && grade <= 100 ? null : { 'invalidGrade': true };
  }
}
