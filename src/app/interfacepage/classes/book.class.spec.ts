import { Book } from './book.class';

describe('Book', () => {
  it('повинен створити екземпляр Book', () => {
    const title = 'Інститутка';
    const author = 'Василь Стефаник';
    const pageCount = 256;
    const isbn = '978-617-614-541-2';
    const book = new Book(title, author, pageCount, isbn);
    expect(book).toBeTruthy();
    expect(book.title).toEqual(title);
    expect(book.author).toEqual(author);
    expect(book.pageCount).toEqual(pageCount);
    expect(book.getISBN()).toEqual(isbn);
  });
});
