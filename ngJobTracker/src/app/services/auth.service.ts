import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:8083/';
  private baseUrl = environment.baseUrl;
  // user: User = new User();


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  generateBasicAuthCredentials(username, password){
    return btoa(`${username}:${password}`);
  }



  register(user) {
    // create request to register a new account
    return this.http.post(this.baseUrl + 'register', user)
    .pipe(
      tap((res) => {
        this.login(user.username, user.password).subscribe(
          data => {
            this.router.navigateByUrl('/home');
          },
          error => {
            console.error(error);
          }
        );
      }),
      catchError((err: any) => {
        console.error(err);
        return throwError('AuthService.register(): error registering user.');
      })
    );
  }

    login(username, password) {
      // Make credentials
      const credentials = this.generateBasicAuthCredentials(username, password);
      // Send credentials as Authorization header (this is spring security convention for basic auth)
      const headers = new HttpHeaders().set(
          'Authorization', `Basic ${credentials}`);

      // create request to authenticate credentials
      return this.http
        .get(this.baseUrl + 'authenticate', {headers})
        .pipe(
          tap((res) => {
            localStorage.setItem('credentials' , credentials);
            return res;
          }),
          catchError((err: any) => {
            console.log(err);
            return throwError('AuthService.login(): Error logging in.');
          })
        );
    }

    checkLogin() {
      if (localStorage.getItem('credentials')) {
        return true;
      }
      return false;
    }


    getCredentials() {
      return localStorage.getItem('credentials');
    }

    getLoggedInUsername(){
      const token = this.getCredentials();
      const userPassword = atob(token);
      console.log(userPassword);
      const usernameUser = userPassword.split(':')[0];
      return usernameUser;

    }


    logout(){
      localStorage.removeItem('credentials');
    }


}
