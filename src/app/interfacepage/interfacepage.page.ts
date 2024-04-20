import { Component, NgModule, OnInit } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Book } from './classes/book.class';
import { Magazine } from './classes/magazine.class';
import { Textbook } from './classes/textbook.class';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})

export class InterfacepagePage implements OnInit {

  show: string = '';
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    let titleBook = 'Інститутка';
    let authorBook = 'Василь Стефаник';
    let pageCountBook = 256;
    let isbnBook = '978-617-614-541-2';
    let book = new Book(titleBook, authorBook, pageCountBook, isbnBook);

    let titleMagazine = 'Всесвіт';
    let authorMagazine = 'Національна академія наук України';
    let pageCountMagazine = 100;
    let issueNumberMagazine = 1;
    let publicationDateMagazine = new Date('2024-04-15');
    let magazine = new Magazine(titleMagazine, authorMagazine, pageCountMagazine, issueNumberMagazine, publicationDateMagazine);

    let textbook = new Textbook('Українська мова', 'Наталія Петрівна Тарапан', 352, '978-617-7182-71-2', 'Українська мова');

    book.openPage(15);
    magazine.publish();
    textbook.read();

    this.show = textbook.read();
  }
}
