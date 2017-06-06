import backendInterface from '../api/backend-interface'

const notification = (msg) => {
  return {
    type: 'NOTIFICATION',
    msg
  }
}

const notificationClear = () => {
  return {
    type: 'NOTIFICATION_CLEAR'
  }
}

const resetNotificationInTime = (dispatch) => new Promise((resolve, reject) => {
  setTimeout(() => {
    dispatch(notificationClear())
  }, 5000)
})

const createUser = (userName, password) => {
  return (dispatch) => {
    backendInterface.createUser(userName, password)
    .then(x => {
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
