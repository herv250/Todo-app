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
  private addFieldValue: string;

  addTodoList(newTodoTitle: HTMLInputElement): boolean {
    const title = newTodoTitle.value;
    if (title && title.length > 0) {
      const todoList = new TodoList(title);
      this.newTodoList.emit(todoList);
      this.addFieldValue = '';
    }
    return false;
  }
}
