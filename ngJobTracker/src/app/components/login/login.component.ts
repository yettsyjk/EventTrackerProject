import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser = new User();
  invalidLogin = false;
  loginSuccessful = false;
  errMessage = 'Error: Check Your Credentials';
  successMessage: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    const loggedUser = form.value;

    console.log('newUser is: ' + loggedUser);
    this.authService.login(loggedUser.username, loggedUser.password).subscribe(
      data => {
        this.invalidLogin = false;

        this.successMessage = 'Login success';
        console.log(data + ' log in');
        this.router.navigateByUrl('/home');
      },
      oops => {
        this.invalidLogin = true;
        this.loginSuccessful = false;
        console.log('login err: ' + oops);
        console.error(oops);
      }
    );
  }



}
