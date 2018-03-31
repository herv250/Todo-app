import { Recipe } from './recipe.model';
import { Input, OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  @Input() public recipe: Recipe;
  //private dateAdded: Date;

  constructor() {
    //this.dateAdded = new Date();
    /*this._recipe = new Recipe("spaghetti");
    this._recipe.addIngredient("tomato", 0.75, "liter");
    this._recipe.addIngredient("onion", 2);
    this._recipe.addIngredient("minced meat", 500, "grams");*/
   }

  ngOnInit() {
  }

}
