import { Component, OnInit } from '@angular/core';
import { MovieList } from './MovieList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { GenreList } from './service/GenreList';
import { Genre } from './service/Genre';
import { Movie } from './Movie';
import { FirebaseService } from './service/firebase.service';

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  genres = new GenreList();
  private configureServie = new ConfigService();
  private subscriptions: Subscription[] = [];
  movieList = new MovieList(this.configureServie);
  genre: Genre = new Genre();
  count = 0;
  bdMovie = "Movie";
  bdGenre = "Genre";
  constructor(public fbService: FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdMovie, true);
    let taskRes = this.fbService.getRecordList(this.bdMovie, true);
    taskRes.snapshotChanges().subscribe();

    this.fetchTask(this.bdGenre, false); // Встановіть false, щоб відрізнити завантаження жанрів
    let taskRes1 = this.fbService.getRecordList(this.bdGenre, false);
    taskRes1.snapshotChanges().subscribe();

    const genreSub = this.configureServie.genre$.subscribe(() => {
      this.genre = this.configureServie.genre$.value;
    });
    this.subscriptions.push(genreSub);
  }

  fetchTask(bd: any, op: any) {
    this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
      console.log(res);
      if (op) {
        this.movieList.movieList = res;
      } else {
        this.genres.genres = res;
        if (this.genres.genres.length > 0) {
          this.genre = this.genres.genres[this.count];
          this.movieList.search(this.genre.id);
        }
      }
    });
  }


  nextGenre() {
    if (this.genres.genres.length > 0) {
      if (this.count < this.genres.genres.length - 1) {
        this.count++;
      } else {
        this.count = 0;
      }
      this.configureServie.setGenre(this.genres.genres[this.count]);
    }
  }

  addMovie(name: any, year: any, rating: any) {
    let movie = new Movie();
    movie.name = name;
    movie.year = parseInt(year);
    movie.rating = parseFloat(rating);
    movie.genre_id = this.genre.id;
    this.fbService.createMovie(movie);
    this.movieList.search(this.genre.id);
    this.movieList.add(movie);
  }

  addGenre(genre: any) {
    let g = new Genre();
    g.id = this.genres.genres.length + 1;
    g.name = genre;
    this.fbService.createGenre(g);
  }

  editMovie(movie: Movie) {
    // Відкрийте компонент для редагування фільму та передайте об'єкт фільму для редагування
  }

  deleteMovie(index: any) {
    this.fbService.deleteMovie(index, this.bdMovie);
  }



  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
