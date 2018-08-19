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
const Model = mongoose.model('Todo', todoSchema);
exports.model = Model;
