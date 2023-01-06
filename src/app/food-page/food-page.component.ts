import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodserviceService } from '../services/food/foodservice.service';
import { Foods } from '../shared/models/food';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food!: Foods;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodserviceService, private cartService: CartService, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodService.getFoodById(params['id'])
    })
  }

  ngOnInit(): void{
    
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
