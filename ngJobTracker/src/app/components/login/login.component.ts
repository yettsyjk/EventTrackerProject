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
        this.router.navigateByUrl('/home');
        console.log(data + ' log in');
      },
      oops => {
        console.log('login err: ' + oops);
      }
    );
  }



}
