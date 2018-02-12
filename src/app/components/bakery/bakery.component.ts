import { Component, OnInit } from '@angular/core';
import { Food } from '../../classes/food';

import { JobListService } from '../../services/job-list.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

  food: Food[];

  constructor(private jobListService : JobListService) { }

  ngOnInit() {
    this.getFoods();
  }

  goToDiv(fragment: string): void {
    window.location.hash = fragment;
}

getFoods():void {
  this.jobListService.getFoodList().subscribe(foods => this.food = foods);

}

}
