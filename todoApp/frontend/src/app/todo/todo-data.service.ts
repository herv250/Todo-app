import { Injectable } from '@angular/core';
import { Todolist } from './todo-list.model';
import { Todo } from './todo.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'
import { ADD_TODO_MUTATION, ALL_TODOLISTS_QUERY, AllTodolistSResponse, ADD_TODOLIST_MUTATION } from './global-query';

@Injectable({
  providedIn: 'root'
  })
export class TodoDataService {
  private _todoLists;
  private loading: boolean = true;

  constructor(private apollo: Apollo) {
    console.log('start service');
    this.apollo
      .watchQuery<AllTodolistSResponse>({
      query: ALL_TODOLISTS_QUERY
    })
      .valueChanges.subscribe(({ data }) => {        
        console.log('all boards', data.todolists);
         this._todoLists = data.todolists;
         this.loading = data.loading;
        console.log('todolists', this._todoLists);
      });
  }

  getTodoLists()  {
    return this.apollo
      .watchQuery<AllTodolistSResponse>({
      query: ALL_TODOLISTS_QUERY
    }).valueChanges
    .pipe(map(({data}) => {
      return data.todolists;
    }));
  }

  addTodoList(title) {
    console.log('add service');
    //this._todoLists = [...this._todoLists, todoList];
    if(title){
      console.log('list title', title);
      this.apollo.mutate({
          mutation: ADD_TODOLIST_MUTATION,
          variables: {
          title
          },
          update: (store, { data: { createTodolist } }) => {
            //console.log('start update', title);
            // Read the data from our cache for this query.
            const data: any = store.readQuery({
              query: ALL_TODOLISTS_QUERY
            });
            // Add our link from the mutation to the end.
            console.log('before', data.todolists);
            data.todolists
              .push(createTodolist);
              console.log('after', data.todolists);
            // Write our data back to the cache.
            store.writeQuery({ query: ALL_TODOLISTS_QUERY, data });
          }
      })
        .subscribe(response => {
          // We injected the Router service
          //this.router.navigate(['/']);*/
          //console.log("should be added", todoTitle);
        });
      }
  }

  addTodo(todoTitle: string, listId: string) {
    if(todoTitle && listId){
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
        //console.log("should be added", todoTitle);
      });
    }
  }
}
