const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('express-jwt');

const userSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  hash: String,
  salt: String,
  firstName: String,
  lastName: String
});

userSchema.methods.setPassword = password => {
  this.salt = crypto.randomBytes(32).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 64, 'sha512')
    .toString('hex');
};

userSchema.methods.validPassword = password => {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = () => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return jwt.sign(
    {
      _id: this_id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000)
    },
    process.env.TODO_BACKEND_SECRET
  );
};

const model = mongoose.model('User', userSchema);
exports.model = model;
