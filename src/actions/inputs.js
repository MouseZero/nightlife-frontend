const setUserInputAction = (user) => {
  return {
    type: 'SET_USER_INPUT',
    user
  }
}

const setPasswordInputAction = (password) => {
  return {
    type: 'SET_PASSWORD_INPUT',
    password
  }
}

export {
  setUserInputAction,
  setPasswordInputAction
}
