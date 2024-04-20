import { BookReadable } from "../interfaces/book-readable.interface";
import { PrintedPublication } from "./printed-publication.class";

export class Book extends PrintedPublication implements BookReadable {
  constructor(public override title: string, public override author: string, public override pageCount: number, private isbn: string) {
    super(title, author, pageCount);
  }

  read(): string {
    console.log(`Reading the ${this.title} book.`);
    return `Reading the ${this.title} book.`;
  }

  publish(): string {
    console.log(`Publishing the ${this.title} book.`);
    return `Publishing the ${this.title} book.`;
  }

  getISBN(): string {
    return this.isbn;
  }

  openPage(pageNumber: number): string {
    console.log(`Opening page ${pageNumber} of ${this.title}.`);
    return `Opening page ${pageNumber} of ${this.title}.`;
  }
}
