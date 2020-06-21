import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  checkLogin(){
    return this.authService.checkLogin();
  }


  userProfile(){
    const token = this.authService.getCredentials();
    const passwordUser = atob(token);
    const usernameUser = passwordUser.split(':')[0];
    this.router.navigateByUrl(`userProfile/myProfile/${usernameUser}`);
  }


}
