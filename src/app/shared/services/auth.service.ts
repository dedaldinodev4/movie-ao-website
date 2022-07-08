import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { IUserLogin, IUserRegister } from '../dtos/AuthRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token_key = environment.TOKEN_KEY;
  private user_key = environment.USER_KEY; 

  private userSubject: BehaviorSubject<any>;
  public userCurrent: Observable<any>; 

  

  constructor(private apiService: ApiService) { 
    this.userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
    this.userCurrent = this.userSubject.asObservable();
  }

  public getTokenFromStorage(): string | null {
    return localStorage.getItem(this.token_key);
  }

  public setTokenFromStorage(token: string): void {
    localStorage.removeItem(this.token_key);
    localStorage.setItem(this.token_key, token);
  }

  public getUserFromStorage(): any | null {
    return localStorage.getItem(this.user_key);
  }

  public setUserFromStorage(user: any): void {
    localStorage.removeItem(this.user_key);
    localStorage.setItem(this.user_key, JSON.stringify(user));
  }

  public clearDataFromLocalStorage(): void {
    localStorage.removeItem(this.token_key);
    localStorage.removeItem(this.user_key);
  }

  getUserCurrent() {
    return this.userSubject.value;
  }


  loginService({email, password}: IUserLogin): Observable<any> {
    return this.apiService
      .postTypeRequestApi('/auth/login', {
        email, password
      })
      .pipe(
        map((response: any) => {
          this.setTokenFromStorage(response.token);
          this.setUserFromStorage(response.user);
          this.userSubject.next(response.user.id);

          return response.user;
        })
      )
  }

  registerService({
      avatar_url, 
      name, 
      email, password}: IUserRegister): Observable<any> {
        
    return this.apiService.postTypeRequestApi('/auth/register', {
      name, email, password, avatar_url
    });
  }

  logoutService() {
    this.clearDataFromLocalStorage();
    this.userSubject.next(null);
  }

}
