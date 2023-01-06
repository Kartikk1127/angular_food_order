import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[]=[];
  constructor(private fs: FoodserviceService, private router: ActivatedRoute){


    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.foods = this.fs.getAllFoodsBySearchTerm(params['searchItem'])
      else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
      this.foods=this.fs.getAllOrders();
    })
  }

  ngOnInit(): void {
    // everything returned in the food service has been retrieved here
  }

}
