import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FullNameValidationService {

  constructor() { }

  static validFullName(control: AbstractControl): { [key: string]: boolean } | null {
    const fullName = control.value;
    const fullNamePattern = /^[a-zA-Z\s]*$/; // Дозволені лише літери та пробіли
    return fullNamePattern.test(fullName) ? null : { 'invalidFullName': true };
  }
}
