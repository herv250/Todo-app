import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoFilterPipe } from './todo-filter.pipe';
import { TodoSortPipe } from './todo-sort.pipe';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoDataService } from './todo-data.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'overview', component: TodoOverviewComponent },
 
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,    
    FormsModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    AddTodoComponent,
    TodoFilterPipe,
    TodoSortPipe,
    TodoOverviewComponent,
  ],  
  providers: [TodoDataService],
})
export class TodoModule { }
