import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Genre } from './Genre';
import { GenreList } from './GenreList';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  currentGenre = DEFAULT_GENRE;
  genre$: BehaviorSubject<Genre> = new BehaviorSubject<Genre>(DEFAULT_GENRE);

  setGenre(genre: Genre) {
    console.log("NEW changes!");
    this.genre$.next(genre);
  }

  constructor() { }
}

const DEFAULT_GENRE = { "id": 1, "name": "Action" }
