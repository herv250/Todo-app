const { GraphQLObjectType, 
  GraphQLNonNull, 
  GraphQLID, 
  GraphQLString,
  GraphQLList } = require('graphql');

/* Todo List Type*/
exports.todoListType = new GraphQLObjectType({
  name: 'todolist',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      title: {
        type: GraphQLString
      },
      dateLastChanged: {
        type: GraphQLString
      },
      todos: {
        type: new GraphQLList(GraphQLString)
      },
    };
  }
});

