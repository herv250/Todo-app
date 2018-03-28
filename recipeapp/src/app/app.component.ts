//import { Component } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _recipes = new Array<Recipe>();
  
  constructor(){
    const recipe1 = new Recipe("spaghetti");
    const recipe2 = new Recipe("Cake");

    this._recipes.push(recipe1);
    this._recipes.push(recipe2);
  }
  
  newRecipeAdded(recipe) {
    this._recipes.push(recipe);
  }
}
