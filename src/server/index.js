// @flow

import express from 'express';
import graphqlHTTP from 'express-graphql';
import { join } from 'path';
import Schema from './schema';
import Resolvers from './resolvers';

const app = express();

app.use(express.static(join(__dirname, '/public')));
app.use('/graphql', graphqlHTTP({ schema: Schema, rootValue: Resolvers, graphiql: true }));

app.listen(
  3030,
  'localhost',
  err =>
    (err
      ? console.log('An error occured while starting the server.')
      : console.log('Server started on port 3030')),
);
