import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentRating } from './class/StudentRating';
import { FullNameValidationService } from '../full-name-validation.service';
import { GradeValidationService } from '../grade-validation.service';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-student-rating-form',
  templateUrl: './student-rating-form.component.html',
  styleUrls: ['./student-rating-form.component.scss'],
})
export class StudentRatingFormComponent implements OnInit {
  @Output() studentRatingOutput: EventEmitter<StudentRating> = new EventEmitter<StudentRating>();
  ratingForm!: FormGroup;
  studentRating!: StudentRating;
  fullNameError: string = '';
  gradeError: string = '';
  groupError: string = '';
  groupPattern = '^[A-Z]+-[0-9]{1,3}$';

  constructor(private fb: FormBuilder, private gradeValidationService: GradeValidationService,
    private fullNameValidationService: FullNameValidationService, private validationService: ValidationService) {
    this.ratingForm = this.fb.group({
      fullName: ['', Validators.required, FullNameValidationService.validFullName],
      group: ['', [Validators.required, Validators.pattern(this.groupPattern)]],
      averageGrade: ['', [Validators.required, GradeValidationService.validGrade]],
      scholarshipAmount: ['', Validators.required],
      disciplineScores: this.fb.array([]),
    })
  }

  addRating(studentRating: StudentRating): void {
    console.log('Add');
    this.ratingForm.patchValue({
      fullName: studentRating.fullName,
      group: studentRating.group,
      averageGrade: studentRating.averageGrade,
      scholarshipAmount: studentRating.scholarshipAmount,
    });
    const disciplineScoresFormArray = this.ratingForm.get('disciplineScores') as FormArray;
    disciplineScoresFormArray.clear();
    studentRating.disciplineScores.forEach(disciplineScore => {
      disciplineScoresFormArray.push(this.fb.group({
        discipline: [disciplineScore.discipline, Validators.required],
        score: [disciplineScore.score, [Validators.required, Validators.min(0), Validators.max(100)]],
      }));
    });
  }

  removeRating(): void {
    console.log('Delete');
    this.ratingForm.reset();
  }
  removeDiscipline(index: number): void {
    console.log('Delete Discipline');
    const disciplineScoresFormArray = this.ratingForm.get('disciplineScores') as FormArray;
    disciplineScoresFormArray.removeAt(index);
  }
  addDiscipline(): void {
    console.log('Add Discipline');
    const disciplineScoresFormArray = this.ratingForm.get('disciplineScores') as FormArray;
    disciplineScoresFormArray.push(this.fb.group({
      discipline: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    }));
  }

  onSubmit(): void {
    const fullName = (this.ratingForm.get('fullName') as FormControl).value;
    const averageGrade = (this.ratingForm.get('averageGrade') as FormControl).value;
    const group = (this.ratingForm.get('group') as FormControl).value;

    this.fullNameError = this.validationService.validateFullName(fullName);
    this.gradeError = this.validationService.validateGrade(averageGrade);
    this.groupError = this.validationService.validateGroup(group);
    if (!this.fullNameError && !this.gradeError && !this.groupError) {
      console.log('Дані введені правильно. Відправлення форми...', this.ratingForm.value);
      this.studentRatingOutput.emit(this.ratingForm.value);
    }
  }


  getForm(): FormGroup {
    return this.ratingForm;
  }
  showMessage(message: string): void {
    console.log(message);
  }

  getDisciplineControls(): any[] {
    return (this.ratingForm.get('disciplineScores') as FormArray).controls;
  }

  ngOnInit() { }
}
