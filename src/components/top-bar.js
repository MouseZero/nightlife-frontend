import React from 'react'
import PropTypes from 'prop-types'

const TopBar = ({ searchAction }) => {
  return (
    <div className="top-bar">
      <div className="title">
        Nightlife Bar Attendance
      </div>
      <div className="tag-line">
        See which bars are popular tonight!
      </div>
      <div className="nightlife-input-group">
        <input id="bar-search" className="nightlife-input" onSubmit={searchAction} />
        <br/>
        <span>What city are you spending the evening in</span>
      </div>
      <div className="login-group">
        <button id="create-user" className="main-button">Create User</button>
        <button id="login" className="main-button">Login</button>
      </div>
    </div>
  )
}

TopBar.propTypes = {
  searchAction: PropTypes.function
}

export default TopBar
