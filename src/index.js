import 'babel-polyfill'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import Root from './components/Root'
import configureStore from './store/configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
import './styles/main.scss'
import 'whatwg-fetch'
import environmentCheck from './util/environmentCheck'

environmentCheck()

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
    const NewRoot = require('./components/Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    )
  })
}
