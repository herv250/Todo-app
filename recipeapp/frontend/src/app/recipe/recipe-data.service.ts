import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient/ingredient.model';

@Injectable()
export class RecipeDataService {
 private readonly _appUrl = "/API/";

  constructor(private http: HttpClient) { 
  }
  
  get recipes(): Observable<Recipe[]> {
    return this.http
                .get(`${this._appUrl}recipes/`)
                .pipe(
                  map((list: any[]): Recipe[] => 
                    list.map(Recipe.fromJSON)));    
  }

  addNewRecipe(recipe): Observable<Recipe>{
    return this.http
    .post(`${this._appUrl}recipes/`, recipe)
    .pipe(
      map(
        (item: any): Recipe =>
          new Recipe(item.name, item.ingredients, item.created)
      )
    );
  };

  removeRecipe(rec){
    return this.http
            .delete(`${this._appUrl}recipe/${rec.id}`)
            .pipe(map(Recipe.fromJSON));
  }

  addIngredientToRecipe(ing: Ingredient, rec: Recipe):   
    Observable<Ingredient> {
      const theUrl = `${this._appUrl}recipe/${rec.id}/ingredients`;
      return this.http.post(theUrl, ing)
        .pipe(map(Ingredient.fromJSON));
    }

}
