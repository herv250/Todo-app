import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

@Injectable()
export class RecipeDataService {
 private _recipes = new Array<Recipe>();

  constructor() { 
    let recipe1 = new Recipe("spaghetti");
    this._recipes.push(recipe1);
  }
  
  get recipes() : Recipe[] {
    return this._recipes;
  }

  addNewRecipe(recipe){
    this._recipes.push(recipe);
  }

}
