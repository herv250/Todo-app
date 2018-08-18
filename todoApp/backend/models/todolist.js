const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateLastChanged: {
    type: String
  },
  todos: String
});
const Model = mongoose.model('Todolist', todolistSchema);
exports.model = Model;
