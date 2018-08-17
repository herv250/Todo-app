
const { GraphQLNonNull, 
  GraphQLString } = require('graphql');
const TodoListType = require('../types/todolist');
const TodoListModel = require('../../models/todolist');

const addTodoList = {
  type: TodoListType.todoListType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      require: true
    }
  },
  resolve(root, params) {
    const tModel = new TodoListModel(params);
    const newTodoList = tModel.save();
    if (!newTodoList) {
      throw new Error('Error');
    }
    return newTodoList;
  }
};

exports.add = addTodoList;