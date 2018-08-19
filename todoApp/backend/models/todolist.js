const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todolistSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  lastChangeDate: Date,
  todos:  [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Todo'}],
});
const Model = mongoose.model('Todolist', todolistSchema);
exports.model = Model;
