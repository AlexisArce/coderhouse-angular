import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=35&certification_country=US&api_key=bd8cce21a42c20001a84c31a90e6b26b&language=es-ES'
    );
    //detalle de una película
    //https://api.themoviedb.org/3/movie/550?api_key=bd8cce21a42c20001a84c31a90e6b26b&language=es-ES
    //Obtiene generos, con el id se puede filtrar en la query discover (with_genres)
    //https://api.themoviedb.org/3/genre/movie/list?api_key=bd8cce21a42c20001a84c31a90e6b26b&language=es-ES
  }
}
