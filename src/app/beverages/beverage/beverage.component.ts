import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../beverage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {

  beverage: Object = {};

  constructor(
    private beverageService: BeverageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const resp = await this.beverageService.getBeverageById(this.activatedRoute.snapshot.params['id']);
    this.beverage = resp || [];
  }

  async updateBeverage(beverage: any) {
    const beverageId = beverage.id;
    const resp = await this.beverageService.updateBeverage(beverageId, beverage);
    if (resp) {
      this.router.navigate(['beverages']);
    }
  }

}
