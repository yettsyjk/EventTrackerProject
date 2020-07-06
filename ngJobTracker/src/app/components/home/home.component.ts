import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobApps = [];

  //line chart using angular charts
  public lineChartData: ChartDataSets[] = [
    {
      data:
      [1, 2, 3, 4, 5],
      label: 'July Jobs Applied'
    },
  ];
  public lineChartLabels: Label[] = ['July', 'August'];
  public lineChartOptions: (ChartOptions & {
    annotation: any
  }) = {};

  public lineChartColors: Color[] = [{
    borderColor: 'black',
    backgroundColor: 'rgba(105, 0, 132,0.2)',
  }, ];

public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];
public chartClicked(e: any): void {}
public chartHovered(e: any): void {}

  constructor(
    private authService: AuthService,
    private router: Router,
    private jobService: JobService,
    private registerComp: RegisterComponent,
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
