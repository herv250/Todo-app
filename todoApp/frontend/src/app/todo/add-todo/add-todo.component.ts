import { Component, Output, EventEmitter } from '@angular/core';
import { TodoList } from '../todo-list.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() 
  public newTodoList = new EventEmitter<TodoList>();
 
 
  addTodoList(newTodoTitle: HTMLInputElement) : boolean {
    const todoList = new TodoList(newTodoTitle.value);
    this.newTodoList.emit(todoList);
    return false;
  }

}
