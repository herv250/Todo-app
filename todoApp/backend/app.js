const createError = require('http-errors');
var express = require('express');
const cors = require('cors');
//const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const graphqlExpress  = require('express-graphql');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const glue = require('schemaglue');
const app = express();

// view engine setup

const GRAPHQL_PORT = 4000;
//const WS_PORT = 4090;
const MONGO_URL =
  process.env.MONGO_URL || 'mongodb://localhost:27017/graphql';

app.use(cors());

const { schema, resolver } = glue('./graphql');


const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver
});
//console.log('test');
app.use(
  '/graphql',
  graphqlExpress({
    schema: executableSchema,
    graphiql: true,
    logger: { log: e => console.log(e) },
  })
);

app.listen(4000, () =>
  console.log(
    `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`
  )
);
/*
app.head('/graphql', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Request-Method', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Content-Length');
  res.end();
});*/
mongoose.connect(
  MONGO_URL,
  { useNewUrlParser: true }
);
mongoose.connection
  // eslint-disable-next-line
  .on('error', function(err) {
    console.log(
      'Error: Could not connect to MongoDB. Did you forget to run `mongod`?'
        .red
    );
  })
  .on('open', function() {
    console.log('Connection extablised with MongoDB');
  });
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;
