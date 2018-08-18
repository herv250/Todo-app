const Todolist = require('../../models/todolist').model;

exports.resolver = {
  Query: {
    todolists: () => Todolist.find()
  },
  Mutation: {
    createTodolist: (_, { title }) => {
      let todolist = new Todolist({ title: title });      
      if (!todolist) {
        throw new Error('Error');
      }
      todolist.save();
      return todolist;
    },
    removeTodolist: (_, { id }) => Todolist.findByIdAndRemove(id)
  }
};
