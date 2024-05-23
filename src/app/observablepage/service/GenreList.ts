import { Genre } from "./Genre";

export class GenreList {
  genres = new Array();
  constructor() {

  }
  add(genre: Genre) {
    this.genres.push(genre);
  }
}
