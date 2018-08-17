const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateLastChanged: {
    type: String
  },
  todos: {
    type: [String]
  }
});
const Model = mongoose.model('TodoList', todoListSchema);
module.exports = Model;
