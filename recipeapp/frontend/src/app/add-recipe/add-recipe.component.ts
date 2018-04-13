import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;

  constructor(private fb: FormBuilder) { }

  /*addRecipe(newRecipeName: HTMLInputElement) : boolean {
    const recipe = new Recipe(newRecipeName.value);
    this.newRecipe.emit(recipe);
    return false;
  }*/
  
public readonly unitTypes = ['', 'Liter', 'Gram', 'Tbsp'];

  ngOnInit(){
    this.recipe = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: this.fb.array([ this.createIngredients() ])
    });
  }

  onSubmit(){
    const recipe = new Recipe(this.recipe.value.name);
    for(const ing of this.recipe.value.ingredients){
      if(ing.ingredientname.length > 2) {
        recipe.addIngredient(new Ingredient(ing.ingredientname,
          ing.amount, ing.unit ));
      }
    }
    this.newRecipe.emit(recipe);
  }

  createIngredients(): FormGroup {
    return this.fb.group({
      amount: [''],
      unit: [''],
      ingredientname: ['', [Validators.required,
        Validators.minLength(3)]]
    })
  }
}
