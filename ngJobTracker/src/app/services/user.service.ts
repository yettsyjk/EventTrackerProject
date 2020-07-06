import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUrl = 'http://localhost:8083/' + 'api/users';
  private baseUrl = environment.baseUrl  + 'api/users';//for AWS EC2 deployment

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }



  findUserById(){
    const httpOptions = this.getHttpOptions();
    return this.http.get<User[]>(this.baseUrl, httpOptions).pipe(
      catchError((err: any) => {
      console.error(err);
      return throwError('err in findUserById');
      })
    );
  }


  displayLoggedInUser(id){
   const httpOptions = this.getHttpOptions();
   console.log('show id' + id);
   return this.http.get<User>(`${this.baseUrl}/${id}`, httpOptions).pipe(catchError((err: any) => {
    console.log(err);
    return throwError('err in find by username user srvice');
      })
    );
  }

displayLoggedInUserByUsername(){
  const httpOptions = this.getHttpOptions();
  console.log( 'show logged in user' );
  return this.http.get<User>(`${this.baseUrl}/username`, httpOptions).pipe(
    catchError((err: any) => {
    console.error(err);
    return throwError('show logged in user error' + err);
    })
  );
}

displayedLoggedInUser(id){
  const httpOptions = this.getHttpOptions();
  return this.http.get<User>(`${this.baseUrl}/${id}`, httpOptions).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError('display loggedInUser error' + err);
    })
  );
}

private getHttpOptions(){
  const credentials = this.authService.getLoggedInUsername();
  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Basic ${credentials}`,
      'X-Requested-With':  'XMLHttpRequest'
    })
  };
  return httpOptions;
}

index(){
  const httpOptions = this.getHttpOptions();
  return this.http.get<User[]>(this.baseUrl + '/', httpOptions).pipe(
    catchError((err: any ) => {
      console.log(err);
      return throwError('display logged in user error');
    })
  );
}

updateUser(user: User){
  console.log(user);
  const httpOptions = this.getHttpOptions();
  if (this.authService.checkLogin()){
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user, httpOptions).pipe(catchError((err: any) => {
     console.log(err);
     return throwError('update user');
    }));
  }
}

enableUser(uId){
  console.log(uId);
  const httpOptions = this.getHttpOptions();
  if (this.authService.checkLogin()){
    return this.http.get<User>(`${this.baseUrl}/admin/${uId}`, httpOptions).pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError('enable user');
    } )
    );
    }
  }

  disableUser(id: number){
    const httpOptions = this.getHttpOptions();
    if (this.authService.checkLogin()){
      return this.http.get<User>(`${this.baseUrl}/admin/${id}`, httpOptions).pipe(catchError((err: any) => {
        console.error(err);
        return throwError('disable user');
      })
      );
    }
  }


}
