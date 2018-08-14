import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoFilterPipe } from './todo/todo-filter.pipe';
import { FormsModule } from '@angular/forms';
import { TodoSortPipe } from './todo/todo-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    AddTodoComponent,
    TodoFilterPipe,
    TodoSortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
