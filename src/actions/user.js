import backendInterface from '../api/backend-interface'
import { notificationClear, notification } from './notification'

const resetNotificationInTime = (dispatch) => new Promise((resolve) => {
  setTimeout(() => {
    dispatch(notificationClear())
    resolve('success')
  }, 5000)
})

const createUser = (userName, password) => {
  return (dispatch) => {
    backendInterface.createUser(userName, password)
    .then(() => {
      dispatch(notification('Created User ' + userName))
      return resetNotificationInTime(dispatch)
    })
    .catch(() => {
      dispatch(notification('Could not create user'))
      return resetNotificationInTime(dispatch)
    })
  }
}

export {
  createUser
}
