import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=35&certification_country=US&api_key=bd8cce21a42c20001a84c31a90e6b26b'
    );
  }
}
