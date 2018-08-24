import { Component } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  private addFieldValue: string;

  constructor(private _todoDataService: TodoDataService){

  }

  addTodoList(newTodoTitle: HTMLInputElement): boolean {
    const title = newTodoTitle.value;
    if (title && title.length > 0) {
      this._todoDataService.addTodoList(title);
      this.addFieldValue = '';
    }
    return false;;
  }
}
