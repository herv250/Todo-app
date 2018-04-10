import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  
  ngOnInit(){
    this.recipe = this.fb.group({
      name: ['risotto']
      //[Validators.required, Validators.minLength(2)]),
    })
  }

  onSubmit(){
    this.newRecipe.emit(new Recipe(this.recipe.value.name));
  }
}
