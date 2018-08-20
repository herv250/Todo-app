/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';
import { Todolist } from './todo-list.model';
import { Todo } from './todo.model';

export const ALL_TODOLISTS_QUERY = gql`
  query {
    todolists {
      _id
      title
      lastChangeDate
      todos {
        _id
        title
        state
      }
    }
  }
`;

export interface AllTodolistSResponse {
  todolists: Todolist[];
  loading: boolean;
}

export const ADD_TODO_MUTATION = gql`
  mutation($todoTitle: String!, $listId: ID!) {
    createTodo(title: $todoTitle, todolistId: $listId) {
      _id
      title
      state
    }
  }
`;

export interface AddTodoResponse {
  todo: Todo;
  loading: boolean;
}
