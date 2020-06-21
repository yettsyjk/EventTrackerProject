import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  invalidLogin = false;
  loginSuccessful = false;
  errMessage = 'Error: Check Your Credentials';
  successMessage: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(user) {
    this.authService.login(user.username, user.password).subscribe(
      data => {
        this.invalidLogin = false;
        this.loginSuccessful = true;
        this.successMessage = 'success';
        this.router.navigateByUrl('/job');
        console.log(data + ' log in');
      },
      oops => {
        this.invalidLogin = true;
        this.loginSuccessful = false;
        console.log('login err: ' + oops);
      }
    );
  }



}
