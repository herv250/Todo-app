import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';


const appRoutes: Routes = [
  {
    path: 'todo',
    loadChildren: 'src/app/todo/todo.module#TodoModule',
    data: { preload: true}
  },
  {
    path: 'user',
    loadChildren: 'src/app/user/user.module#UserModule',
    data: { preload: true}
  },
  { path: '', redirectTo: 'todo/overview', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadStrategy })
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadStrategy
  ]
})
export class AppRoutingModule { }
