import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeDataService } from '../recipe-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  private _recipe: Recipe;

  constructor(private route: ActivatedRoute, 
    private recipeDataService: RecipeDataService) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this._recipe = item['recipe']);    
  }

}
