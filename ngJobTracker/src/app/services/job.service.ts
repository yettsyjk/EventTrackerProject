import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8085';
  private url = this.baseUrl + 'api/applied';




  constructor(
    private datePipe: DatePipe,
    private authService: AuthService,
    private userService: UserService
  ) { }



}
