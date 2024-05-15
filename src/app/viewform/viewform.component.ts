import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentRating } from '../student-rating-app/student-rating-form/class/StudentRating';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss'],
})
export class ViewformComponent implements OnInit {
  @Output() studentRatingOutput: EventEmitter<any> = new EventEmitter<any>();
  show_update: boolean = false;
  studentRatings: StudentRating[] = [];

  constructor() {
  }

  ngOnInit() { }

  addRating(event: any) {
    if (event as StudentRating) {
      let rating: StudentRating = event;
      this.studentRatings.push(rating);
      console.log(this.studentRatings.values);
    }
    else {
      throw new Error("Error of type")
    }
  }

  update() {
    this.show_update = true;
  }

  showUp(event: any) {
    if (typeof event === "boolean") {
      this.show_update = event;
    }
    else {
      throw new Error("Error of type")
    }
  }

  update_save(event: any, i: number) {
    if (event as StudentRating) {
      this.studentRatings[i] = event;
    }
    else {
      throw new Error("Error of type")
    }
  }
  receiveStudentRating(event: any) {
    console.log("Received student rating:", event);
    this.studentRatings.push(event);
  }
}
