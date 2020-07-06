import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:8083/';
  private baseUrl = environment.baseUrl;
  // user: User = new User();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  generateBasicAuthCredentials(username, password){
    return btoa(`${username}:${password}`);
  }



  register(user: User) {
    // create request to register a new account
    return this.http.post(this.baseUrl + 'register', user)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Oops, AuthService.register(): error registering user.');
      })
    );
   }

   login(username, password) {
    // Make credentials
    const credentials = this.generateBasicAuthCredentials(username, password);
    // Send credentials as Authorization header (this is spring security convention for basic auth)
    console.log('username: ' + username);
    console.log('Password: ' + password);
    console.log('Credentials: ' + credentials);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
   };
   // create request to authenticate credentials
   return this.http
   .get<User>(this.baseUrl + 'authenticate', httpOptions)
   .pipe(
     tap((res) => {
       localStorage.setItem('credentials' , credentials);
       localStorage.setItem('currentUserId' , res.id + '');
       localStorage.setItem('currentUserRole' , res.role);
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

    getCurrentUserId(){
      return localStorage.getItem('currentUserId');
    }

    getCurrentUserRole(){
      return localStorage.getItem('currentUserRole');
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
      localStorage.removeItem('currentUserRole');
      localStorage.removeItem('currentUserId');
    }


}
