import backendInterface from '../api/backend-interface'
import { notificationClear, notification } from './notification'
import { notificationTypes } from '../constants/notifications'

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

export {
  createUser
}
