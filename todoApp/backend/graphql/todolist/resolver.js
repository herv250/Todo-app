const Todolist = require('../../models/todolist').model;


exports.resolver = {
  Query: {
    todolists: () => Todolist.find({})
  },
  Mutation : {
    createTodolist: (_, {title}) => {
      let todolist = new Todolist({title: title});
      todolist.save();
      if (!todolist) {
        throw new Error('Error');
      }
      return todolist;
    },
    removeTodolist: (_, {query}) => Todolist.findByIdAndRemove(query.selector),
  }
};