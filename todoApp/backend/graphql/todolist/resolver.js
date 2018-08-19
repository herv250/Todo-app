const Todolist = require('../../models/todolist').model;
const dateResolver = require('../scalars/date').dateResolver;

exports.resolver = {
  Query: {
    todolists: () => Todolist.find()
  },
  Mutation: {
    createTodolist: (_, { title }) => {
      let todolist = new Todolist({ title: title, lastChangeDate: new Date()  });
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
