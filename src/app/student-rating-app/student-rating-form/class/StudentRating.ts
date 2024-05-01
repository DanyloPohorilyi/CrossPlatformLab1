export class StudentRating {
  fullName: string;
  group: string;
  averageGrade: number;
  scholarshipAmount: number;
  disciplineScores: { discipline: string, score: number }[];

  constructor(fullName: string, group: string, averageGrade: number, scholarshipAmount: number, disciplineScores: { discipline: string, score: number }[]) {
    this.fullName = fullName;
    this.group = group;
    this.averageGrade = averageGrade;
    this.scholarshipAmount = scholarshipAmount;
    this.disciplineScores = disciplineScores;
  }
  getRatingScores(): number[] {
    return this.disciplineScores.map(score => score.score);
  }

}
