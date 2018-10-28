const path = require('path');
const express = require('express');
const cors = require('cors');
const graphqlExpress = require('express-graphql');
const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const glue = require('schemaglue');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/users');
// view engine setup

const GRAPHQL_PORT = process.env.PORT || 5000;
//const WS_PORT = 4090;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/graphql';

let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.TODO_BACKEND_SECRET });
require('./config/passport');

app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());
const { schema, resolver } = glue('./graphql', {});

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolver
});
//console.log('test');
app.use(
  '/graphql',
  graphqlExpress(req => ({
    schema: executableSchema,
    graphiql: true,
    logger: { log: e => console.log(e) }
  }))
);

app.listen(GRAPHQL_PORT, () =>
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
      'Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red
    );
  })
  .on('open', function() {
    console.log('Connection extablised with MongoDB');
  });
//app.use('/', indexRouter);
//app.use(bodyParser.urlencoded({ extended: false }))
app.use('/users', users);
app.use(express.static(__dirname + '/dist/todoApp'));

app.all('*', (req, res) => {
  const indexFile = `${path.join(__dirname, 'dist')}/todoApp/index.html`;
  res.status(200).sendFile(indexFile);
});
module.exports = app;
