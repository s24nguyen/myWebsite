import { Component, OnInit } from '@angular/core';
import { Job } from '../../classes/jobBlock';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  jobs:Job[];
  hoverTest: boolean = false;

  constructor(private getDataService : GetDataService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.getDataService.getJobList().subscribe(jobs => this.jobs = jobs);
  }

  highlight(){
    if(!this.hoverTest){
      this.hoverTest = true;
    }
  }
  unHighlight(){
    if(this.hoverTest){
      this.hoverTest = false;
    }
  }

}
