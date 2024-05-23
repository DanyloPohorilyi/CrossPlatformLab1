import { Movie } from './../Movie';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Genre } from './Genre';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  movieListRef?: AngularFireList<any>;
  genreListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }

  createMovie(movie: Movie) {
    return this.movieListRef?.push({
      genre_id: movie.genre_id,
      name: movie.name,
      year: movie.year,
      rating: movie.rating
    })
  }
  createGenre(genre: Genre) {
    return this.genreListRef?.push({
      id: genre.id,
      name: genre.name,
    });
  }

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  //Get list
  //?true - movie
  //?false - genre
  getRecordList(bd: string, op: boolean) {
    if (op) {
      this.movieListRef = this.db.list('/' + bd);
      return this.movieListRef
    }
    else {
      this.genreListRef = this.db.list('/' + bd);
      return this.genreListRef;
    }
  }

  updateMovie(id: number, movie: Movie, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      genre_id: movie.genre_id,
      name: movie.name,
      year: movie.year,
      rating: movie.rating
    })
  }
  updateGenre(id: number, genre: Genre, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: genre.id,
      name: genre.name,
    })
  }

  deleteMovie(id: string, bd: string) {
    return this.db.object('/' + bd + '/' + id).remove();
  }

  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }
}
