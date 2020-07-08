import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobApps = [];

  //line chart using angular charts
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
public chartClicked(e: any): void {}
public chartHovered(e: any): void {}

  constructor(
    private router: Router,
    private jobService: JobService,
    config: NgbAccordionConfig
  ) {
    config.closeOthers = true;
    config.type = '';
   }

  ngOnInit(){
    // this.loadApps();
  }

//   loadApps(){
//     this.jobService.findAll().subscribe(
//       (jobApps) => {
//         console.log(jobApps);
//         jobApps.reverse();
//         this.jobApps = jobApps;
//       },
//       (errLoad) => {
//         console.error('error' + errLoad);
//         console.error(errLoad);
//       }
//     );
//   }


// getNumberOfJobApps(){
//   //need a pipe
// }

// checkLogin(){
//   return this.authService.checkLogin();
// }

}
