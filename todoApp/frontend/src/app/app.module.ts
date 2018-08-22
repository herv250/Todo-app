import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoFilterPipe } from './todo/todo-filter.pipe';
import { FormsModule } from '@angular/forms';
import { TodoSortPipe } from './todo/todo-sort.pipe';
import { TodoDataService } from './todo/todo-data.service';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';
import { TodoOverviewComponent } from './todo/todo-overview/todo-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component'

const appRoutes: Routes = [
  { path: 'overview', component: TodoOverviewComponent },
  { path: 'login', component: LoginComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    AddTodoComponent,
    TodoFilterPipe,
    TodoSortPipe,
    TodoOverviewComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // create Apollo
    const uri = 'http://localhost:4000/graphql';
    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache()
    });
  }
}
