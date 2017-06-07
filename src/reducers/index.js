// Set up your root reducer here...
 import { combineReducers } from 'redux'
 import { routerReducer } from 'react-router-redux'
 import userLogin from './user-login'
 import notifications from './notifications'
 import search from './search'

 const rootReducer = combineReducers({
   routing: routerReducer,
   userLogin,
   notifications,
   search
 })

 export default rootReducer
