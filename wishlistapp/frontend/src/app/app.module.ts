import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WishListComponent } from './wishlist/wish-list/wish-list.component';
import { WishComponent } from './wishlist/wish/wish.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { OverviewComponent } from './wishlist/overview/overview.component';


@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    WishComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
