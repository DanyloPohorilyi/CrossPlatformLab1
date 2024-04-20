import { Periodical } from "../interfaces/periodical.interface";
import { PrintedPublication } from "./printed-publication.class";

export class Magazine extends PrintedPublication implements Periodical {
  constructor(public override title: string, public override author: string, public override pageCount: number, private issueNumber: number, private publicationDate: Date) {
    super(title, author, pageCount);
  }

  read(): string {
    console.log(`Reading the ${this.title} magazine.`);
    return `Reading the ${this.title} magazine.`;
  }

  publish(): string {
    console.log(`Publishing the ${this.title} magazine.`);
    return `Publishing the ${this.title} magazine.`;
  }

  getIssueNumber(): number {
    return this.issueNumber;
  }

  getPublicationDate(): Date {
    return this.publicationDate;
  }
}
