import { Component, OnInit } from '@angular/core';
import { JOBS } from '../../mock-db';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  jobs = JOBS;

  constructor() { }

  ngOnInit() {
  }

}
