// Set up your root reducer here...
 import { combineReducers } from 'redux'
 import { routerReducer } from 'react-router-redux'
 import userLogin from './user-login'
 import notifications from './notifications'

 const rootReducer = combineReducers({
   routing: routerReducer,
   userLogin,
   notifications
 })

 export default rootReducer
