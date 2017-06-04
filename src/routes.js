import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import CreateUser from './components/CreateUser'
import DefaultPage from './components/DefaultPage'

export default (
    <Route path="/" component={App}>
      <IndexRoute component={DefaultPage}/>
      <Route path="/create/user" component={CreateUser}/>
    </Route>
)
