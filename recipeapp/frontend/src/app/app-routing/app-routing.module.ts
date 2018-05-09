import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { RecipeListComponent } from '../recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from '../recipe/add-recipe/add-recipe.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RecipeModule } from '../recipe/recipe.module';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';


const appRoutes: Routes = [
  {
    path: 'recipe',
    loadChildren: 'app/recipe/recipe.module#RecipeModule',
    data: { preload: true }
  },
  { path: '', redirectTo: 'recipe/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{
       preloadingStrategy: SelectivePreloadStrategy })
  ],
  declarations: [],
  exports: [
    RouterModule
  ],
  providers: [SelectivePreloadStrategy]
})
export class AppRoutingModule { }
