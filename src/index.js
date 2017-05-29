import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import Root from './components/Root'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
require('./favicon.ico')

import App from './components/App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}