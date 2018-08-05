import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoFilterPipe } from './todo-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    TodoFilterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
