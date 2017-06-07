import backendInterface from '../api/backend-interface'
import { notifyGood, notifyError } from './notification'

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

const createUser = (userName, password) => {
  return (dispatch) => {
    backendInterface.createUser(userName, password)
    .then(({success, message}) => {
      if (success) {
        notifyGood(message, dispatch)
      } else {
        notifyError(message, dispatch)
      }
    })
    .catch(() => {
      notifyError('Could not create user', dispatch)
    })
  }
}

const authenticate = (userName, password) => {
  return (dispatch) => {
    backendInterface.authenticate(userName, password)
    .then(({success, token, message}) => {
      if (success) {
        notifyGood('Login Successful', dispatch)
        sessionStorage.setItem('token', token)
        dispatch(setToken(token))
      } else {
        message = message || 'Could not login'
        notifyError(message, dispatch)
      }
    })
    .catch(() => {
      notifyError('Could not login', dispatch)
    })
  }
}

export {
  createUser,
  authenticate,
  logout,
  setToken
}
