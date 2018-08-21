const Todo = require('../../models/todo').model;
const Todolist = require('../../models/todolist').model;

exports.resolver = {
  Query: {
    todos: () => Todo.find(),
    todo: (_, {id}) => Todo.findById(id)
  },
  Mutation: {
    createTodo: (_, { title, todolistId }) => {
      console.log('create todo');
      const t = new Todo({ 
        title: title, 
        state: false
      });
      if (!t) {
        throw new Error('Error');
      }
      Todolist.findById(todolistId)
        .exec()
        .then(todolist => {
          t.save((err, todo) => {
            if (err) {
              return err;
            }
            todolist.todos.push(todo);
            todolist.save(err => {
              if (err) {
                t.remove({ _id: todo._id });
                return err;
              }
            });
          });
        });
      return t;
    },
    removeTodolist: (_, { id }) => Todo.findByIdAndRemove(id)
  }
};
