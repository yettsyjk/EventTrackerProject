import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { JobService } from 'src/app/services/job.service';
import { JobApp } from 'src/app/models/job-app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  closeResult = '';
  modalReference: any;

  jobApps: JobApp[] = [];
  newJobApps: JobApp = new JobApp();
  selected: JobApp = null;
  editJobApp: JobApp = null;






  constructor(
    private authService: AuthService,
    private jobService: JobService,
    private router: Router,
    private modalService: NgbModal
  ) { }

    ngOnInit(): void{
      this.router.navigateByUrl('/appliedjobs');
    }







}
