// Інтерфейс для періодичних видань
export interface Periodical {
  getIssueNumber(): number;
  getPublicationDate(): Date;
}
