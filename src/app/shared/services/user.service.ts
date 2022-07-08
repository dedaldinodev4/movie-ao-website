import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { IUserRequestDTO, IUserRequestList, IUserRequestUpdateDTO } from '../dtos/UserRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getAllUserService(): Observable<IUserRequestList> {
    return this.apiService
      .getTypeRequestApi('/users')
      .pipe(
        map((response: any) => {
          const { results, size } = response;
          return {
            size,
            results
          }
        })
      )
  }

  getOneUserService(id: string): Observable<IUserRequestDTO> {
    return this.apiService
      .getTypeRequestApi(`/users/${id}`)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
  }

  updateUserService(id: string, {
    email, name
  }: IUserRequestUpdateDTO): Observable<any> {
    return this.apiService
      .putTypeRequestApi(`/users/${id}`, {
        email, name
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      )
  }
}
