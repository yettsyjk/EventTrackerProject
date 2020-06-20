import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DatePipe } from '@angular/common';
import { JobApp } from '../models/job-app';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
    private userService: UserService,
    private http: HttpClient
  ) { }

  getHttpOptions() {
    const credentials = this.authService.getToken();
    const httpOptions = {
      headers: {
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      }
    };
    return httpOptions;
  }

  index(){
  return this.http.get<JobApp[]>(this.url, this.getHttpOptions()).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError('err' + err);
      })
    );
  }


  create(jobApp: JobApp){
    jobApp.enabled = false;
    jobApp.description = '';
    return this.http.post<JobApp>(this.url, jobApp, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('err' + err);
      })
    );
  }

  show(jobAppId: number) {
    return this.http.get<JobApp>(`${this.url}/${jobAppId}`, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('err' + err);
      })
    );
  }

  update(jobApp: JobApp) {
    if (jobApp.enabled){
      jobApp.applyDate = this.datePipe.transform(Date.now(), 'shortdate');
    } else {
      jobApp.applyDate = '';
    }
    return this.http.put<JobApp>(`${this.url}/${jobApp.id}`, jobApp, this.getHttpOptions()).pipe(

    );
  }

  destroy(id: number) {
    const httpOptions = this.getHttpOptions();
    return this.http.delete(`${this.url}/${id}`, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('err' + err);
      })
    );
  }

}
