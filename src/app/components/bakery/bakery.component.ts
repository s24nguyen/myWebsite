import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.scss']
})
export class BakeryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToDiv(fragment: string): void {
    window.location.hash = fragment;
}

}
