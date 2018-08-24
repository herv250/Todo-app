import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoDataService } from '../todo-data.service';
import { Apollo } from 'apollo-angular';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Todolist } from '../todo-list.model';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css'],
  providers: [TodoDataService]
})
export class TodoOverviewComponent implements OnInit {
  public filterTodolistTitle: string;
  public filterTodolist$ = new Subject<string>();
  private _todolists = [];
  private loading: boolean = true;

  constructor(
    private _todoDataService: TodoDataService,
    private apollo: Apollo
  ) {
    this.filterTodolist$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterTodolistTitle = val));
    //this.todolists;
    //console.log('lists', this.todolists);
  }

  ngOnInit() {
   this._todoDataService.getTodoLists()
   .subscribe(data => {
        console.log('all boards', data);
        this.loading = data.loading;
        this._todolists = data.todolists.map(todoList =>
          Todolist.fromJSON(todoList)
        );
    });
    //this._todoDataService.getTodoLists();
  }

}
