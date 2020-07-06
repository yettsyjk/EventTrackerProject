import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private registerComp: RegisterComponent
  ) { }

  ngOnInit() {
  }

  // userProfile(username){
  //   this.router.navigateByUrl(`userprofile/${username}`);
  // }

  // register(form: NgForm) {
  //   this.registerComp.register();
  // }

  // checkLoggedInUser(): boolean {
  //   if (this.authService.checkLogin()){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
