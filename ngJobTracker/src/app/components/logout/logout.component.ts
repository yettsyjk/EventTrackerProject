import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLoggedIn = false;


  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.isLoggedIn = this.authService.checkLogin();
    // console.log(this.isLoggedIn);
    this.logout();
  }

  logout() {
    console.log('logged out');
    this.authService.logout();
    if (!this.authService.checkLogin()){
      this.router.navigateByUrl('/home');
    }
  }

}
