import React from 'react'
import { Link } from 'react-router'
import NightlifeButton from '../NightlifeButton'

const LoginButtons = () => {
  return (
    <div className="login-group">
      <Link to="/create/user">
        <NightlifeButton>
          Create User
        </NightlifeButton>
      <span className="button-padding"/>
      </Link>
      <Link to="/login">
        <NightlifeButton>
          Login
        </NightlifeButton>
      </Link>
    </div>
  )
}

export default LoginButtons
