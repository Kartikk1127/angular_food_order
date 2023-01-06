import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getFoodById(id: string): Foods{
    return this.getAllOrders().find(food => food.id == id) ?? new Foods();
  }

  getAllFoodByTag(tag:string): Foods[]{
    if(tag === "All")
    return this.getAllOrders();
    else
    return this.getAllOrders().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[]{
    return[
      {name: 'All', count: 8},
      {name: 'Pizza', count: 3},
      {name: 'Manchurian', count: 1},
      {name: 'Burger', count: 3},
      {name: 'French Fries', count: 1},
      {name: 'Chicken Soup', count: 1},
    ]
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAllOrders().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllOrders(): Foods[]{
    return[
      {
        id: '1',
        name: 'Pizza',
        cookTime: '10-20',
        price:20,
        favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Pizza']
      },
      {
        id: '2',
        name: 'Manchurian',
        cookTime: '10-20',
        price:5,
        favourite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Manchurian']
      },
      {
        id: '3',
        name: 'Burger',
        cookTime: '10-20',
        price:10,
        favourite: true,
        origins: ['Germany'],
        star: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Burger']
      },
      {
        id: '4',
        name: 'French Fries',
        cookTime: '10-20',
        price:15,
        favourite: true,
        origins: ['France'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpg',
        tags: ['French Fries']
      },
      {
        id: '5',
        name: 'Chicken Soup',
        cookTime: '10-20',
        price:20,
        favourite: true,
        origins: ['China'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Chicken Soup']
      },
      {
        id: '6',
        name: 'Vegetarian Pizza',
        cookTime: '10-20',
        price:30,
        favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['Pizza']
      },
      {
        id: '7',
        name: 'Chicken Burger',
        cookTime: '10-20',
        price:40,
        favourite: true,
        origins: ['Germany'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['Burger']
      },
      {
        id: '8',
        name: 'Cheese Pizza',
        cookTime: '10-20',
        price:35,
        favourite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['Pizza']
      }
    ];
  }
}
