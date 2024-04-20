import { Magazine } from './magazine.class';

describe('Magazine', () => {
  it('має створити екземпляр журналу', () => {
    const title = 'Всесвіт';
    const author = 'Національна академія наук України';
    const pageCount = 100;
    const issueNumber = 1;
    const publicationDate = new Date('2024-04-15');
    const magazine = new Magazine(title, author, pageCount, issueNumber, publicationDate);
    expect(magazine).toBeTruthy();
    expect(magazine.title).toEqual(title);
    expect(magazine.author).toEqual(author);
    expect(magazine.pageCount).toEqual(pageCount);
    expect(magazine.getIssueNumber()).toEqual(issueNumber);
    expect(magazine.getPublicationDate()).toEqual(publicationDate);
  });
});
