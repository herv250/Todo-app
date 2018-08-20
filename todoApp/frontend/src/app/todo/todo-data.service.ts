import { Injectable } from '@angular/core';
import { Todolist } from './todo-list.model';
import { Todo } from './todo.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import * as Query from './global-query';
import { ADD_TODO_MUTATION, ALL_TODOLISTS_QUERY } from './global-query';

@Injectable({
  providedIn: 'root'
  })
export class TodoDataService {
  private _todoLists;
  private loading: boolean = true;

  constructor(private apollo: Apollo) {
    console.log('start service');
    this.apollo
      .watchQuery<Query.AllTodolistSResponse>({
      query: Query.ALL_TODOLISTS_QUERY
    })
      .valueChanges.subscribe(({ data }) => {        
        console.log('all boards', data.todolists);
         this._todoLists = data.todolists;
         this.loading = data.loading;
        console.log('todolists', this._todoLists);
      });
  }

  ngOnInit() {
    this.todoLists;
  }

  get todoLists() {
    this.apollo
      .watchQuery<Query.AllTodolistSResponse>({
      query: Query.ALL_TODOLISTS_QUERY
    })
      .valueChanges.subscribe(({ data }) => {
        console.log('all boards', data.todolists);
        this._todoLists = data.todolists.map(todoList =>
          Todolist.fromJSON(todoList)
        );
      });
      return this._todoLists;
  }

  addTodoList(todoList) {
    console.log('add service');
    //this._todoLists = [...this._todoLists, todoList];
  }

  addTodo(todoTitle: string, listId: string) {
    console.log('title', todoTitle);
    this.apollo.mutate({
        mutation: ADD_TODO_MUTATION,
        variables: {
        todoTitle,
        listId
        },
        update: (store, { data: { createTodo } }) => {
          console.log('start update', listId);
          // Read the data from our cache for this query.
          const data: any = store.readQuery({
            query: ALL_TODOLISTS_QUERY
          });
          // Add our link from the mutation to the end.
          console.log('before', data.todolists);
          data.todolists
            .find(todolist => todolist._id = listId)
            .todos
            .push(createTodo);
            console.log('after', data.todolists);
          // Write our data back to the cache.
          store.writeQuery({ query: ALL_TODOLISTS_QUERY, data });
        }
    })
      .subscribe(response => {
        // We injected the Router service
        //this.router.navigate(['/']);*/
        console.log("should be added", todoTitle);
      });
  }
}
