const Todo = require('../../models/todo').model;

exports.resolver = {
  Query: {
    todolists: () => Todo.find()
  },
  Mutation: {
    createTodo: (_, { title }, todolist) => {
      const t = new Todo({ title: title });
      if (!t) {
        throw new Error('Error');
      }
      todolist.todos.push(t);
      
      t.save((err, todo) => {
        if (err) {
          return err;
        }
        todolist.todos.push(todo);
        todolist.save((err) => {
          if (err) {
            todolist.remove({ _id: { $in: todolist.todos[todo] } });
            return err;
          }
        });
      });
      return t;
    },
    removeTodolist: (_, { id }) => Todo.findByIdAndRemove(id)
  }
};
