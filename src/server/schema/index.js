// @flow

import { buildSchema } from 'graphql';
import Character from './character';

const Schema = buildSchema(`
  ${Character}
  type Query {
    characters: [Character!]!
  }
`);

export default Schema;
