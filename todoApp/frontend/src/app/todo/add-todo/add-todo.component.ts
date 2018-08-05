import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() 
  public newTodo = new EventEmitter<Todo>();
 
 
  addTodo(newTodoTitle: HTMLInputElement) : boolean {
    const todo = new Todo(newTodoTitle.value);
    this.newTodo.emit(todo);
    return false;
  }

}
