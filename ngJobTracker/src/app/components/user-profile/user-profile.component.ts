import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loggedInUser: User;
  createdUser: User;
  message: string;



  constructor(
      private authService: AuthService,
      private router: Router,
      private userService: UserService,
      private route: ActivatedRoute,
      private jobService: JobService
  ) { }

  ngOnInit() {
  if (!this.authService.checkLogin()){
    this.router.navigateByUrl('/home');
  }
  this.userService.findUserByUsername(this.authService.getLoggedInUsername()).subscribe(
    data => {
      this.loggedInUser = data;
      console.log(data);
    },
    error => {
      this.router.navigateByUrl('/home');
      console.error(error);
    }
  );
  this.getUserData();
  }




  getUserData(){
    this.userService.findUserByUsername(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }




}
