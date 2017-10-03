// @flow

import * as React from 'react';
import { createContainer } from 'react-relay';

type Props = {
  /* ... */
};

type State = {
  obj: boolean,
};

class CharacterContainer extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      obj: false,
    };
  }

  render() {
    return <div>{this.state.obj}</div>;
  }
}

export default CharacterContainer;
