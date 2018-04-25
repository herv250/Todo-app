import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Ingredient } from '../ingredient/ingredient.model';
import { distinct, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;
  public errorMsg: string;

  constructor(private fb: FormBuilder, private _recipeDataService: RecipeDataService) {
    
  }

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

    this.ingredients.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(ingList => {
        const lastElement = ingList[ingList.length - 1];
        if (lastElement.ingredientname && 
          lastElement.ingredientname.length > 2) {
            this.ingredients.push(this.createIngredients());
          }
          /*if(lastElement.ingredientname == undefined || lastElement.ingredientname.length == 0){
            this.ingredients.removeAt(ingList.length - 1);
          }*/
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
    this._recipeDataService.addNewRecipe(recipe).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding
          recipe for ${recipe.name}: ${error.error}`;
      }
    )
  }

  createIngredients(): FormGroup {
    return this.fb.group({
      amount: [''],
      unit: [''],
      ingredientname: ['', [Validators.required,
        Validators.minLength(3)]]
    })
  }

  get ingredients(): FormArray {
    return <FormArray>this.recipe.get('ingredients');
  }
}
