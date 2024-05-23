import { Movie } from './Movie';
import { ConfigService } from './service/config.service';
export class MovieList {
  movieList = new Array();
  searchMovie = new Array();
  genreSub = this.configService.genre$.subscribe(() => {
    let genre = this.configService.genre$.value;
    this.search(genre.id);
  });

  constructor(private configService: ConfigService) {

  }

  add(movie: Movie) {
    this.movieList.push(movie);
    this.search(movie.genre_id);
  }

  search(id_gnere: number) {
    this.searchMovie = this.movieList.filter((movie) => {
      return movie.genre_id == id_gnere;
    })
  }

}
