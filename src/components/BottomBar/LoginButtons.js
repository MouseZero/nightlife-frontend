import React from 'react'
import { Link } from 'react-router'

const LoginButtons = () => {
  return (
    <div className="login-group">
      <Link to="/create/user">
        <button className="nightlife-button bottom-button">
          Create User
        </button>
      </Link>
      <Link to="/login">
        <button className="nightlife-button bottom-button">
          Login
        </button>
      </Link>
    </div>
  )
}

export default LoginButtons
