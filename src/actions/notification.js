import { notificationTypes } from '../constants/notifications'
const { GOOD, WARN, ERROR } = notificationTypes

// TODO support for multiplue error messages

const notification = (msg, notificationType = 'good') => {
  return {
    type: 'NOTIFICATION',
    msg,
    notificationType
  }
}

const notificationClear = () => {
  return {
    type: 'NOTIFICATION_CLEAR'
  }
}

const _resetNotificationInTime = (dispatch) => new Promise((resolve) => {
  setTimeout(() => {
    dispatch(notificationClear())
    resolve('success')
  }, 7000)
})

const _notify = (message, notificationType, dispatch) => {
  dispatch(notification(message, notificationType))
  _resetNotificationInTime(dispatch)
}

const notifyGood = (message, dispatch) => {
  _notify(message, GOOD, dispatch)
}

const notifyWarn = (message, dispatch) => {
  _notify(message, WARN, dispatch)
}

const notifyError = (message, dispatch) => {
  _notify(message, ERROR, dispatch)
}

export {
  notification,
  notificationClear,
  notifyGood,
  notifyWarn,
  notifyError
}
