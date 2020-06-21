import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { JobApp } from 'src/app/models/job-app';
import { JobPipe } from 'src/app/pipes/job.pipe';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit {
  title = 'JobTracker';
  editJobApp = null;
  newAppJob = new JobApp();
  selected = null;
  showComplete = false;

  jobApps: JobApp[] = [];





  constructor(
    private authService: AuthService,
    private jobService: JobService,
    private userService: UserService,
    private incompletePipe: JobPipe,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    if (!this.authService.checkLogin()){
      this.router.navigateByUrl('/login');
    }
    if (!this.selected && this.route.snapshot.paramMap.get('id')){
        const jobAppIdParam = this.route.snapshot.paramMap.get('id');
        const jobAppId = parseInt(jobAppIdParam, 10);
        this.jobService.show(jobAppId).subscribe(
          jobApp => {
            this.selected = jobApp;
          },
          oops => {
            console.error('oops' + oops);
            this.router.navigateByUrl('oops');
          }
        );
      } else {
        this.reload();
      }
  }

  reload(){
    this.jobService.index().subscribe(
      reloadApp => {
        this.jobApps = reloadApp;
        this.editJobApp = null;
        this.selected = null;
      },
      err => {
        console.error(err);
      }
    );
  }

  displayJobApp(jobApp){
    this.selected = jobApp;
  }

  displayTable(){
    this.selected = null;
    console.log('tableSelected');
  }
  getJobAppCount(){
    return this.incompletePipe.transform(this.jobApps).length;
  }

  getWarningLevel(){
    const warningLevel = this.getJobAppCount();
    if (warningLevel >= 5){
      return 'badge badge-danger';
    } else {
      return 'badge badge-success';
    }
  }

  addJobApp(jobApp: JobApp ){
    this.jobService.create(this.newAppJob).subscribe(
      data => {
        console.log(data);
        this.newAppJob = new JobApp();
        this.reload();
      },
      badNews => {
        console.error('err' + badNews);
      }
    );
  }

    setEditJobApp(){
      this.editJobApp = Object.assign({},
        this.selected);
    }

    updateJobApp(jobApp) {
      console.log(jobApp);
      this.jobService.update(jobApp).subscribe(
        updated => {
          this.reload();
          this.selected = this.setEditJobApp;
          this.editJobApp = null;
        },
        failed => {
          console.error('err' + failed);
          console.error(failed);
        }
      );
    }

  deleteJobApp(id: number) {
    this.jobService.destroy(id).subscribe(
      yay => {
        this.reload();
      },
      oops => {
        console.error('err' + oops);
      }
    );
  }



}
