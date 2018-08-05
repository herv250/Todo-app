import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Todo } from './todo/todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  public filterTodoTitle: string;
  public filterTodo$ = new Subject<string>();

  constructor(private _todoDataService : TodoDataService) {
    this.filterTodo$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => this.filterTodoTitle = val);
  }

  get todos() : Todo[] {
    return this._todoDataService.todos;
  }

  newTodoAdded(todo){
    this._todoDataService.addNewTodo(todo);
  }


}
