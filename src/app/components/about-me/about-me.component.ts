import { Component, OnInit } from '@angular/core';
import { Job } from '../../classes/jobBlock';

import { JobListService } from '../../services/job-list.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  jobs:Job[];
  hoverTest: boolean = false;

  constructor(private jobListService : JobListService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobListService.getJobList().subscribe(jobs => this.jobs = jobs);
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
