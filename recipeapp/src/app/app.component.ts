//import { Component } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeDataService]  
})
export class AppComponent {
  constructor(private _recipeDataService : RecipeDataService){
  }

  get recipes() : Recipe[]{
    return this._recipeDataService.recipes;
  }
  
  newRecipeAdded(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
