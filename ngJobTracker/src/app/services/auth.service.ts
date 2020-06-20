import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8083/';
  user: User = new User();


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  generateBasicAuthToken(username, password){
    return btoa(`${username}:${password}`);
  }



    register(user){
      return this.http.post(`${this.baseUrl}register`, user).pipe(
        tap((res) => {
          this.login(user.username, user.passowrd).subscribe(
            data => {
              this.router.navigateByUrl('/home');
            },
            oopsRegister => {
              console.error(oopsRegister);
            }
          );
        }),
        catchError((err: any) => {
          return throwError('error');
        })
      );
    }

    login(username, password){
      const token = this.generateBasicAuthToken(username, password);
      const headers = new HttpHeaders().set(
        'Authorization', `Basic ${token}`);
      return this.http.get(this.baseUrl + '/api/authenticate', {headers}).pipe(
        tap((res) => {
          localStorage.setItem('token', token);
          return res;
        }),
        catchError((err: any) => {
            console.error('logging in issues: ' + err);//issue is: [object Object]
            return throwError('error');
        })
      );
    }

    checkLogin(){
      if (localStorage.getItem('token')){
        return true;
      }
      return false;
    }


    getToken(){
      return localStorage.getItem('token');
    }

    getLoggedInUsername(){
      const token = this.getToken();
      const userPassword = atob(token);
      console.log(userPassword);
      const usernameUser = userPassword.split(':')[0];
      return usernameUser;

    }


    logout(){
      localStorage.removeItem('token');
    }


}
