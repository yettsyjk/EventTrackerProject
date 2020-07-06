import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = new User();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('register component');
  }


  register(user: User) {
    console.log(user);
    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        this.authService.login(user.username, user.password).subscribe(
          loggedIn => {
            this.router.navigateByUrl('home');
            console.log(loggedIn);
            console.log('username: ' + user.username);
            console.log('password: ' + user.password);
          },
          notLoggedIn => {
            console.error('Register component error');
            console.error(notLoggedIn);
          }
        );
      },
      majorError => {
        console.error('Register component: ' + majorError);
      }
    );
  }

}
