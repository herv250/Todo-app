import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo.model';
import { TodoDataService } from '../../todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() public todo: Todo

  constructor(private _todoDataService: TodoDataService) {
    //this.title = "Webapps taak";
   }

  ngOnInit() {
  }

  addTodoItem(todoTitle: HTMLInputElement){
    console.log('new item', todoTitle);
    this._todoDataService.addTodo(this.todo.title, todoTitle.value);
  }

  get todoItems(){    
    return this.todo.todoItems;
  }

}