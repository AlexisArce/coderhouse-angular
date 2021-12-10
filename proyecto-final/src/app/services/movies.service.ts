import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import movies from './data/movies.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return movies;
  }
}
