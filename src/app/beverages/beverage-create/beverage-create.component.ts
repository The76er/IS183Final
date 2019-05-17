import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'beverage-create',
  templateUrl: './beverage-create.component.html',
  styleUrls: ['./beverage-create.component.css']
})

export class BeverageCreateComponent implements OnInit {

  beverage: Object = {};

  constructor(
    private beverageService: BeverageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.beverage = {};
  }

  async createBeverage(beverage: Object) {
    const resp = await this.beverageService.addBeverage(beverage);
    if (resp) {
      this.router.navigate(['/beverages']);
    }

  }
}
