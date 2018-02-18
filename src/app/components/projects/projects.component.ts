import { Component, OnInit } from '@angular/core';
import { LotsComponent } from './carousel/lots/lots.component';
import { AstroNocComponent } from '../projects/carousel/astro-noc/astro-noc.component';
import { IntroComponent } from '../projects/carousel/intro/intro.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project:any;
  intro = IntroComponent;
  lots = LotsComponent;
  astroNOC = AstroNocComponent; 


  changeComponent(comp) {
    this.project = comp;
  }

  ngOnInit() {
    this.project = IntroComponent;
  }

  constructor() { }

}
