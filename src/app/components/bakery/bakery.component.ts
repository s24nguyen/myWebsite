import { Component, OnInit } from '@angular/core';
import { Food } from '../../classes/food';

import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

  food: Food[];

  constructor(private getDataService : GetDataService) { }

  ngOnInit() {
    this.getFoods();
  }

  goToDiv(fragment: string): void {
    window.location.hash = fragment;
}

getFoods():void {
  this.getDataService.getFoodList().subscribe(foods => this.food = foods);

}

}
