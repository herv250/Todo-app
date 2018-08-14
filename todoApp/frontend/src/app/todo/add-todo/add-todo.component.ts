import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() 
  public newTodoList = new EventEmitter<Todo>();
 
 
  addTodoList(newTodoTitle: HTMLInputElement) : boolean {
    const todoList = new Todo(newTodoTitle.value);
    this.newTodoList.emit(todoList);
    return false;
  }

}
