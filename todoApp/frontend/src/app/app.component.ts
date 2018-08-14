import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TodoList } from './todo/todo-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  public filterTodoListTitle: string;
  public filterTodoList$ = new Subject<string>();

  constructor(private _todoDataService : TodoDataService) {
    this.filterTodoList$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => this.filterTodoListTitle = val);
  }

  get todoLists() : TodoList[] {
    return this._todoDataService.todoLists;
  }

  addTodoList(todoList){
    this._todoDataService.addTodoList(todoList);
  }


}
