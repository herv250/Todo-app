const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const queryType = require('./queries/todolist').todoListQueryType;
const mutation = require('./mutations/index');

const todoListSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
});


exports.queries = todoListSchema;
