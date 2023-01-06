import { Component, Input } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent :string = 'center';
  tags: Tag[] = [];
  constructor(private fs: FoodserviceService){
    this.tags=fs.getAllTag();
  }

  ngOnInit(): void{
  }

}
