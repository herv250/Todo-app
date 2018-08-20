const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Todo = require('./todo').model;

const todolistSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  todos:  [{type: mongoose.Schema.Types.ObjectId, 
    ref: 'Todo'}],
}, {
  timestamps: {
    updatedAt: 'lastChangeDate'
  }
});

/*todolistSchema.pre('remove', function(next) {
  console.log('trying to remove ----------------------------')
  //console.log('check todos',this);
  //odo.deleteMany({ _id: { $in: this.todos } });
  this.model('Todo').remove( { _id: { $in: Model.find({ this._id : { $in this.todos}}) } });
});*/


const Model = mongoose.model('Todolist', todolistSchema);
exports.model = Model;
