import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie, IMovieRequestDTO, IMoviesList } from '../dtos/MovieRequestDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private apiService: ApiService) { }

  getAllMovieService():Observable<IMoviesList> {
    return this.apiService
      .getTypeRequestMovieApi()
      .pipe(
        map((response: any) => {
          const { results } = response;
          return {
            size: results.length,
            results,
          }
        })
      )
  }

  getOneMovieService(id: number | undefined): Observable<IMovieRequestDTO> {
    return this.apiService
      .getTypeRequestMovieApi(`/${id}`)
      .pipe(
        map((response: any) => {
          const { results } = response;
          return results;
        })
      )
  }


}
