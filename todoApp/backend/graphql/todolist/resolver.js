const Todolist = require('../../models/todolist').model;
const dateResolver = require('../scalars/date').dateResolver;
const Todo = require('../../models/todo').model;

exports.resolver = {
  Query: {
    todolists: () => Todolist.find()
  },
  Mutation: {
    createTodolist: (_, { title }) => {
      const todolist = new Todolist({ title: title });
      if (!todolist) {
        throw new Error('Error');
      }
      todolist.save();
      return todolist;
    },
    removeTodolist: (_, { id }) => {
      return Todolist.findByIdAndRemove(id)
        .exec()
        .then((todolist, err) => {
          if(err){
            return err;
          }
          if(todolist){
            Todo.remove({ _id: { $in: todolist.todos } }).exec();
          }
        });

      
    }
  },
  Date: dateResolver,
  Todolist: {
    todos: todolist => Todo.find({ _id: { $in: todolist.todos } })
  }
};
