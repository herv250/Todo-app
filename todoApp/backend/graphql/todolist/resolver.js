const Todolist = require('../../models/todolist').model;
const dateResolver = require('../scalars/date').dateResolver;

exports.resolver = {
  Query: {
    todolists: () => Todolist.find()
  },
  Mutation: {
    createTodolist: (_, { title }) => {
      const todolist = new Todolist({ title: title, });
      if (!todolist) {
        throw new Error('Error');
      }
      todolist.save();
      return todolist;
    },
    removeTodolist: (_, { id }) => Todolist.findByIdAndRemove(id)
  },
  Date: dateResolver
};
