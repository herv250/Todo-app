
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var TodoListModel = require('../../models/todolist');
var TodoListType = require('../types/todolist').todoListType;

// Query
exports.todoListQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      todoLists: {
        type: new GraphQLList(TodoListType),
        resolve: function () {
          const todoLists = TodoListModel.find().exec();
          if (!todoLists) {
            throw new Error('Error');
          }
          return todoLists;
        }
      }
    };
  }
});

