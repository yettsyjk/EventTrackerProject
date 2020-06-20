import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8085/' + 'api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }



  findUserById(id){
    return this.http.get<User>(`${this.baseUrl}/users/${id}`).pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError(err);
      })
    );
  }


  findByUsername(username){
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set(
      'Authorization', `Basic ${token}`
    );
    return this.http.get<User>(`${this.baseUrl}/users/${username}`, {headers}).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(err);
      })
    );
  }





}