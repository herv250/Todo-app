import { Injectable } from '@angular/core';
import { TodoList } from './todo-list.model';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  private _todoLists = new Array<TodoList>();

  constructor() { 
    const todoListTemplate = new TodoList("Webapps taak");
    todoListTemplate.addTodo(new Todo('taak 1', true));
    todoListTemplate.addTodo(new Todo('slapen'));
    this._todoLists.push(todoListTemplate);
  }

  get todoLists() : TodoList[] {
    return this._todoLists;
  }

  addTodoList(todoList){
    this._todoLists = [...this._todoLists, todoList];
  }

  addTodo(todoListTitle: string, newTodo: Todo){
    this._todoLists
      .find(todoList => todoList.title == todoListTitle)
      .addTodo(newTodo);
  }  


}
