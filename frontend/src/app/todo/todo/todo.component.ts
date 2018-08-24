import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() 
  public todo: Todo
  constructor(private _todoDataService: TodoDataService) {
    
   }

  ngOnInit() {
  }

  changeState(newState: HTMLInputElement){
    this._todoDataService
      .changeTodoState(this.todo.id, newState.checked);
  }


}