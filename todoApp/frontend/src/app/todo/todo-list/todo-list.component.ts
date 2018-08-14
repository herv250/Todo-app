import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../todo-list.model';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() public todoList: TodoList

  constructor(private _todoDataService: TodoDataService) {
    //this.title = "Webapps taak";
   }

  ngOnInit() {
  }

  addTodo(todoTitle: HTMLInputElement){
    this._todoDataService
      .addTodo(this.todoList.title, new Todo(todoTitle.value));
  }

  get todos(){    
    return this.todoList.todos;
  }

}