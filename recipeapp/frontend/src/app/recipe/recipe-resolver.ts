import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RecipeDataService } from './recipe-data.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe>{

  constructor(private recipeService: RecipeDataService){

}

  resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot) : Observable<Recipe>{
    return this.recipeService.getRecipe(route.params['id']);
  }

}
