import { Component, Query, OnInit } from '@angular/core';
import { TodoDataService } from './todo/todo-data.service';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Todolist } from "./todo/todo-list.model";
import { Apollo } from '../../node_modules/apollo-angular';
import { AllTodolistSResponse, ALL_TODOLISTS_QUERY, ADD_TODO_MUTATION } from './todo/global-query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent implements OnInit {
  public filterTodoListTitle: string;
  public filterTodoList$ = new Subject<string>();
  private todoLists = [];
  private loading: boolean = true;

  constructor(private _todoDataService: TodoDataService, private apollo: Apollo) {
    this.filterTodoList$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => this.filterTodoListTitle = val);
      this.getTodoLists();
      console.log('lists', this.todoLists);

  }

  ngOnInit() {
    this.todoLists = this._todoDataService.todoLists;
    console.log('app component list', this.todoLists);
  }

  getTodoLists() {
    this.apollo
      .watchQuery<AllTodolistSResponse>({
      query: ALL_TODOLISTS_QUERY
    })
      .valueChanges
      .subscribe(({ data }) => {
        console.log('all boards3', data.todolists);
        this.todoLists =  data.todolists
          .map(todoList => Todolist.fromJSON(todoList));
      });
    console.log('app component list2', this.todoLists);
  }
  

  addTodoList(title: string, todolistId: string){
    
  }


}
