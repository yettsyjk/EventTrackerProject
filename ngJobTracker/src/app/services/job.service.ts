import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DatePipe } from '@angular/common';
import { JobApp } from '../models/job-app';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8085';
  private url = this.baseUrl + 'api';



  constructor(
    private datePipe: DatePipe,
    private authService: AuthService,
    private userService: UserService
  ) { }

  create = function(jobApp, userId){
    console.log(jobApp.title);
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set(
      'Authorization', `Basic ${token}`);
    if (this.authService.checkLogin()){
        return this.http.post(`${this.url}/applied`, {headers}).pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError(err);
          })
        );
      }
    };

  // index(id){
  //   const token = this.authService.getToken();
  //   const headers = new HttpHeaders().set(
  //     'Authorization', `Basic ${token}`);

  //   if (this.authService.checkLogin()){
  //     return this.http.get<JobApp>(`${this.url}/applied/${id}`, {headers}).pipe(
  //       catchError((err: any) => {
  //         console.log(err);
  //         return throwError(err);
  //       })
  //     );
  //   }

  // }



}
