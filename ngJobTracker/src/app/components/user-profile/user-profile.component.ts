import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { JobService } from 'src/app/services/job.service';

import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userId = '';
  user = null;
  users: User [] = [];
  editUser: User = null;
  selected: User = null;
  closeResult = '';


  constructor(
      private authService: AuthService,
      private router: Router,
      private userService: UserService,
      private route: ActivatedRoute,
      private jobService: JobService,
      private modalService: NgbModal
  ) { }

  ngOnInit(): void {
   this.setupProfile();
  }

  setupProfile(){
    this.userId = this.getUserId();
    return this.userService.displayLoggedInUser(this.userId).subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.log('setup profile error: ' + error);
      }
    );
  }

  index(){
    this.userService.index().subscribe(
      indexOfUsers => {
        this.users =  indexOfUsers;
      },
      badIndex => {
        console.error(badIndex);
      }
    );
  }

  getUserId(){
    return this.authService.getCurrentUserId();
  }

  edit(user: User){
    this.editUser = user;
  }
  updateUser(user){
    this.userService.updateUser(user).subscribe(
      updatedUser => {
        this.index();
        this.router.navigateByUrl('/userprofile');
      },
      badUpdate => {
        console.error(badUpdate);
      }
    );
  }


//MODAL///

  open(content, user) {
    this.editUser = user;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  close(){
    this.modalService.dismissAll();
  }

}
