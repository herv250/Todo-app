const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  state: {
    type: Boolean
  }
});

todoSchema.pre('remove', function(next) {
  console.log('del todo');
  this.model('Todolist').update(
    {},
    { $pull: { todos: this._id } },
    { safe: true, multi: true },
    next
  );
});
const Model = mongoose.model('Todo', todoSchema);
exports.model = Model;
