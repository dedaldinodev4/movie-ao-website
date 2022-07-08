import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl_Api = environment.API_BASEURL;
  private baseUrl_Movie = environment.MOVIE_BASEURL;

  constructor(private http: HttpClient) { }

  getTypeRequestApi(url: string) {
    return this.http.get(`${this.baseUrl_Api}${url}`)
      .pipe( map((response) => {
        return response;
      })
    )
  }

  postTypeRequestApi(url: string, payload: any) {
    return this.http.post(`${this.baseUrl_Api}${url}`, payload)
      .pipe(map((response) => {
        return response;
      })
    )
  }

  putTypeRequestApi(url: string, payload: any) {
    return this.http.put(`${this.baseUrl_Api}${url}`, payload)
      .pipe(map((response) => {
        return response;
      })
    )
  }

  getTypeRequestMovieApi(url?: string) {

    if (url) {
      return this.http.get(`${this.baseUrl_Movie}${url}`)
        .pipe( map((response) => {
          return response;
        })
      )
    }

    return this.http.get(`${this.baseUrl_Movie}`)
        .pipe( map((response) => {
          return response;
        })
    )

  }


}
