import { Component, OnInit } from '@angular/core';
import { LotsComponent } from './carousel/lots/lots.component';
import { AstroNocComponent } from '../projects/carousel/astro-noc/astro-noc.component';
import { IntroComponent } from '../projects/carousel/intro/intro.component';

import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/common';

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
    this.document.body.scrollTop = 0;
  }

  ngOnInit() {
    this.project = IntroComponent;
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }

}
