// @flow

import ReactDOM from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const rootElement = document.getElementById('root');

const wrapApp = AppComponent => (
  <AppContainer>
    <AppComponent />
  </AppContainer>
);

ReactDOM.render(wrapApp(App), rootElement);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default;
    ReactDOM.render(wrapApp(NextApp), rootElement);
  });
}
