import { Pipe, PipeTransform } from '@angular/core';
import { JobApp } from '../models/job-app';

@Pipe({
  name: 'incomplete'
})
export class JobPipe implements PipeTransform {

  transform(jobApps: JobApp[], showAll?: Boolean): JobApp[] {
    let result: JobApp[] = [];//assign into new array

    if (showAll){
      return jobApps;
    }
    for (let i = 0; i < jobApps.length; i++){
      if(!jobApps[i].enabled){
        result.push(jobApps[i]);
        console.log(jobApps[i]);
      }
    }
    return result;
  }

}
