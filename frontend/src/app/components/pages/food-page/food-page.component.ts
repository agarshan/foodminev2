import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent {
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.food = this.foodService.getFoodById(params.id);
    });
  }
}
