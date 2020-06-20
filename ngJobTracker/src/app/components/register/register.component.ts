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
  newUser: User;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newUser = new User();
  }


  register() {
    this.authService.register(this.newUser).subscribe(
      data =>{
        console.log(data);
        this.authService.login(this.newUser.username, this.newUser.password).subscribe(
          loggedIn =>{
            this.router.navigateByUrl('/home');
            console.log(loggedIn);
            console.log(this.newUser.username);
            console.log(this.newUser.password);
          },
          notLoggedIn => {
            console.log(notLoggedIn);
          }
        );
      },
      error => {
        console.error(error);
      }
    );
  }

}
