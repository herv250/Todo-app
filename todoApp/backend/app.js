const express = require('express');
const mongoose = require('./config/mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
// eslint-disable-next-line
const db = mongoose();
const app = express();

app.use('*', cors());

const todoSchema = require('./graphql/index').queries;
app.use('/graphql', cors(), graphqlHTTP({
  schema: todoSchema,
  rootValue: global,
  graphiql: true
}));

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});

module.exports = app;