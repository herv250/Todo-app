import { Recipe } from '../recipe.model';
import { Input, OnInit, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  @Input() public recipe: Recipe;
  @Output() public addRecipe = new EventEmitter<Recipe>();
  @Output() public deleteRecipe = new EventEmitter<Recipe>();
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

  removeRecipe(){
    this.deleteRecipe.emit(this.recipe);
  }

  addToRecipes(){
    this.addRecipe.emit(this.recipe);
  }

  get ingredients(){
    return this.recipe.ingredients;
  }
}
