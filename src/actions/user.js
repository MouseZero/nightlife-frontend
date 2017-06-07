import backendInterface from '../api/backend-interface'
import { notificationClear, notification } from './notification'
import { notificationTypes } from '../constants/notifications'

const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    token
  }
}

const logout = () => {
  sessionStorage.removeItem('token')
  return {
    type: 'LOGOUT'
  }
}

const resetNotificationInTime = (dispatch) => new Promise((resolve) => {
  setTimeout(() => {
    dispatch(notificationClear())
    resolve('success')
  }, 5000)
})

const createUser = (userName, password) => {
  return (dispatch) => {
    backendInterface.createUser(userName, password)
    .then(({success, message}) => {
      if (success) {
        dispatch(notification(message))
      } else {
        dispatch(notification(message, notificationTypes.ERROR))
      }
      return resetNotificationInTime(dispatch)
    })
    .catch(() => {
      dispatch(notification('Could not create user', notificationTypes.ERROR))
      return resetNotificationInTime(dispatch)
    })
  }
}

const authenticate = (userName, password) => {
  return (dispatch) => {
    backendInterface.authenticate(userName, password)
    .then(({success, token, message}) => {
      if (success) {
        dispatch(notification('Login Successful'))
        sessionStorage.setItem('token', token)
        dispatch(setToken(token))
      } else {
        message = message || 'Could not login'
        dispatch(notification(message), notificationTypes.ERROR)
      }
      return resetNotificationInTime(dispatch)
    })
    .catch(() => {
      dispatch(notification('Could not login', notificationTypes.ERROR))
      return resetNotificationInTime(dispatch)
    })
  }
}

const search = (location, token) => {
  console.log('got to search in action creator')
  return () => {}
  // return (dipatch) => {
  //   backendInterface.search(location, token)
  //   .then(({success, businesses}) => {
  //     console.log(success)
  //     console.log(businesses)
  //   })
  //   .catch(x => console.log(x))
  // }
}


export {
  createUser,
  authenticate,
  logout,
  setToken,
  search
}
