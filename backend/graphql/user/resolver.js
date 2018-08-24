const User = require('../../models/user').model;
const passport =require('passport');

exports.resolver = {
  Query: {
    users: () => User.find(),
    todolistsFromUser: () => User.find({ author: this.username }),
    checkUsernameAvailability: (_, { username }) =>
      User.find({ username: username })
  },
  Mutation: {
    createUser: (_, { username, password }) => {
      console.log('create todolist');
      const user = new User({ username: username });
      user.setPassword(password);
      if (!user) {
        throw new Error('Error');
      }
      user.save();
      return user;
    
    }
  }
};
