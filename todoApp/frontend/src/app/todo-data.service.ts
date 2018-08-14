import { Injectable } from '@angular/core';
import { Todo } from './todo/todo/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private _todos = new Array<Todo>();

  constructor() { 
    const todo1 = new Todo("Webapps taak");
    todo1.addTodoItem('taak1');
    this._todos.push(todo1);
  }

  get todos() : Todo[] {
    return this._todos;
  }

  addTodoList(todo){
    this._todos = [...this._todos, todo];
  }

  addTodo(todoListTitle: string, newTodo: string){
    this._todos
      .find(todoList => todoList.title == todoListTitle)
      .addTodoItem(newTodo);
  }  


}
