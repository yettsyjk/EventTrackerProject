import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DatePipe } from '@angular/common';
import { JobApp } from 'src/app/models/job-app';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8083/';
  // private url = this.baseUrl + 'api/applied';
  private url = environment.baseUrl + 'api/applied'; // for AWS EC2 deployment


  constructor(
    private datePipe: DatePipe,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient
  ) { }

  // getHttpOptions() {
  //   const credentials = this.authService.getCredentials();
  //   const httpOptions = {
  //     headers: {
  //       Authorization: `Basic ${credentials}`,
  //       'X-Requested-With': 'XMLHttpRequest'
  //     }
  //   };
  //   return httpOptions;
  // }

  index(){
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get<JobApp[]>(this.url).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError('jobservice.ts index route retrieving jobs err: ' + err);
      })
    );
  }

  findAll(){
    return this.http.get<JobApp>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('error' + err);
      })
    );
  }

  create(jobApp: JobApp){
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.post<JobApp>(this.url, jobApp, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts create route err: ' + err);
      })
    );
    }

 show(jobAppId: number){
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      })
    };
    return this.http.get<JobApp>(`${this.url}/${jobAppId}`, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts show route err: ' + err);
      })
    );
  }

 update(jobApp: JobApp) {
  const credentials = this.authService.getCredentials();
  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'X-Requested-With': 'XMLHttpRequest'
    })
  };
  return this.http.put<JobApp>(`${this.url}/${jobApp.id}`, jobApp,
     httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts update route err: ' + err);
      })
    );
  }

 destroy(id: number){
  const credentials = this.authService.getCredentials();
  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'X-Requested-With': 'XMLHttpRequest'
    })
  };
  return this.http.delete<JobApp>(`${this.url}/${id}`, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts destroy route err: ' + err);
      })
    );
    }

 searchByKeyword(keyword){
   return this.http.get<JobApp[]>(this.url + '/search/keyword/' + `${keyword}`).pipe(
     catchError((err: any) => {
        console.error(err);
        return throwError('error' + err);
     })
   );
   }




}
