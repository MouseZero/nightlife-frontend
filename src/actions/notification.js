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

export {
  notification,
  notificationClear
}
