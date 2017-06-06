import React from 'react'
import { Link } from 'react-router'

const BottomBar = () => {
  return (
    <div id="bottom-bar-container">
      <div className="login-group">
        <Link to="/create/user">
          <button className="nightlife-button">
            Create User
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BottomBar
