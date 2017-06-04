// Set up your root reducer here...
 import { combineReducers } from 'redux'
 import { routerReducer } from 'react-router-redux'
 import userLogin from './user-login'

 const rootReducer = combineReducers({
   routing: routerReducer,
   userLogin
 })

 export default rootReducer
