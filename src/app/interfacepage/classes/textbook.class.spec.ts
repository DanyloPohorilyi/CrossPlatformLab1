import { Textbook } from './textbook.class';

describe('Textbook', () => {
  it('має створити екземпляр Textbook', () => {
    const title = 'Українська мова';
    const author = 'Наталія Петрівна Тарапан';
    const pageCount = 352;
    const subject = 'Українська мова';
    const isbn = '978-617-7182-71-2';
    const textbook = new Textbook(title, author, pageCount, isbn, subject);
    expect(textbook).toBeTruthy();
    expect(textbook.title).toEqual(title);
    expect(textbook.author).toEqual(author);
    expect(textbook.pageCount).toEqual(pageCount);
    expect(textbook.getSubject()).toEqual(subject);
    expect(textbook.getISBN()).toEqual(isbn);
  });
});
