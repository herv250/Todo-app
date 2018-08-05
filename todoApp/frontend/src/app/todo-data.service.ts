import { Injectable } from '@angular/core';
import { Todo } from './todo/todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private _todos = new Array<Todo>();

  constructor() { 
    const todo1 = new Todo("Webapps taak");
    this._todos.push(todo1);
  }

  get todos() : Todo[] {
    return this._todos;
  }

  addNewTodo(todo){
    this._todos = [...this._todos, todo];
  }
}
