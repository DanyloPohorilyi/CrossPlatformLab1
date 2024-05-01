import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateFullName(fullName: string): string {
    if (!fullName) {
      return 'ПІБ студента не може бути порожнім!';
    }

    const parts = fullName.split(' ');
    if (parts.length !== 3) {
      return 'ПІБ студента повинно містити ім\'я, прізвище та по батькові, розділені пробілом!';
    }

    const [firstName, lastName, middleName] = parts;
    if (!firstName || !lastName || !middleName) {
      return 'ПІБ студента повинно містити ім\'я, прізвище та по батькові, розділені пробілом!';
    }

    return '';
  }
  validateGroup(group: string): string {
    if (!group) {
      return 'Група студента не може бути порожньою!';
    }

    const groupPattern = /^[A-Z]+-[0-9]{1,3}$/;
    if (!groupPattern.test(group)) {
      return 'Група студента повинна мати формат великих літер, дефісу та до трьох цифр, наприклад, "AB-123"!';
    }

    return '';
  }


  validateGrade(grade: number): string {
    if (grade < 0 || grade > 100 || isNaN(grade)) {
      return 'Оцінка повинна бути числом від 0 до 100!';
    }
    return '';
  }
}
