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

export {
  notification,
  notificationClear
}
