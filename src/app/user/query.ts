/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const CHECK_USERNAME_AVAILABILITY = gql`
  query($username: String!) {
    checkUsernameAvailability(username: $username) {
      username
    }
  }
`;

export interface CheckUsernameAvailabilityResponse {
  CheckUsernameAvailability: string;
  //loading: boolean;
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
  //todo: Todo;
  loading: boolean;
}