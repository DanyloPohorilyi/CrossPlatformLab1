import { Educational } from "../interfaces/educational.interface";
import { Book } from "./book.class";

export class Textbook extends Book implements Educational {
  constructor(public override title: string, public override author: string, public override pageCount: number, isbn: string, private subject: string) {
    super(title, author, pageCount, isbn);
  }

  getSubject(): string {
    return this.subject;
  }
}
