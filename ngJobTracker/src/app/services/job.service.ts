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
  private baseUrl = 'http://localhost:8083';
  // private url = this.baseUrl + 'api/applied';
  private url = environment.baseUrl + 'api/applied';//for AWS EC2 deployment


  constructor(
    private datePipe: DatePipe,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient
  ) { }

  getHttpOptions() {
    const credentials = this.authService.getCredentials();
    const httpOptions = {
      headers: {
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest'
      }
    };
    return httpOptions;
  }

  index(){
  return this.http.get<JobApp[]>(this.url).pipe(
    catchError((err: any) => {
      console.error(err);
      return throwError('jobservice.ts index route retrieving jobs err: ' + err);
      })
    );
  }


  create(newJobApp){
    newJobApp.enabled = false;
    newJobApp.description = '';
    if (this.authService.checkLogin()){
    return this.http.post<JobApp>(this.url, newJobApp, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts create route err: ' + err);
      })
    );
    }
  }

  show(jobAppId: number) {
    return this.http.get<JobApp>(`${this.url}/${jobAppId}`, this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts show route err: ' + err);
      })
    );
  }

  update(jobApp: JobApp) {
    if (jobApp.enabled){
      jobApp.applyDate = this.datePipe.transform(Date.now(), 'shortdate');
    } else {
      jobApp.applyDate = '';
    }
    return this.http.put<JobApp>(this.url + '/' + jobApp.id, jobApp,
     this.getHttpOptions()).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts update route err: ' + err);
      })
    );
  }

  destroy(id: number) {
    const httpOptions = this.getHttpOptions();
    return this.http.delete(this.url +  '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('jobservice.ts destroy route err: ' + err);
      })
    );
  }

}
