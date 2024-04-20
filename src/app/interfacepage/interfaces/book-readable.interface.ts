// Інтерфейс для книг
export interface BookReadable {
  getISBN(): string;
  openPage(pageNumber: number): void;
}
