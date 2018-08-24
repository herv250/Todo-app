import { Component, OnInit, Input } from '@angular/core';
import { Todolist } from '../todo-list.model';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
  })
export class TodoListComponent implements OnInit {
  @Input() public todoList: Todolist;
  private addFieldValue: string;

  constructor(private _todoDataService: TodoDataService) {
    //this.title = "Webapps taak";
  }

  ngOnInit() {}

  addTodo(todoTitle: HTMLInputElement) {
    console.log('id', this.todoList.id);
    console.log(this.todoList);
    this._todoDataService.addTodo(todoTitle.value, this.todoList.id);
    this.addFieldValue = '';
    console.log('result');
  }

  get todos() {
    return this.todoList.todos;
  }
}
