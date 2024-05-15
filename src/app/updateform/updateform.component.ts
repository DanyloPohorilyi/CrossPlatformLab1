import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentRating } from '../student-rating-app/student-rating-form/class/StudentRating';
import { ValidationService } from '../student-rating-app/validation.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit {

  @Input() studentRating!: StudentRating;
  @Input() show: boolean = true;
  @Output() ratingChange: EventEmitter<StudentRating> = new EventEmitter<StudentRating>;
  @Output() showChange = new EventEmitter();
  constructor() { }

  validate_name(d: string) {
    let validator = new ValidationService();
    if (d) {
      if (!validator.validateFullName(d)) {
        return false;
      }
      return true;
    }
    return true
  }
  save(a: any, db: any, dd: any, b: any) {
    this.show = false;

    this.studentRating = new StudentRating(a, db, dd, b, this.studentRating.disciplineScores);
    this.ratingChange.emit(this.studentRating);
    this.showChange.emit(this.show);
  }
  ngOnInit() { }

}
