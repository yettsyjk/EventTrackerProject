import { Component, OnInit } from '@angular/core';

import { JobService } from 'src/app/services/job.service';
import { JobApp } from 'src/app/models/job-app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobapp',
  templateUrl: './jobapp.component.html',
  styleUrls: ['./jobapp.component.css']
})
export class JobappComponent implements OnInit {
  title = 'JobTracker';
  editJobApp = null;
  newAppJob: JobApp = new JobApp();
  selected: JobApp = null;

  constructor(
    private jobService: JobService,
    private router: Router,
  ) { }

  ngOnInit(): void{
    this.router.navigateByUrl('/appliedjobs');
  }

  addJobApp(jobApp: JobApp ){
    console.log(jobApp);
    this.jobService.create(jobApp).subscribe(
      data => {
        console.log(data);
        this.newAppJob = new JobApp();
        this.router.navigateByUrl('/appliedjobsList');
      },
      badNews => {
        console.error('err' + badNews);
      }
    );
  }


}
