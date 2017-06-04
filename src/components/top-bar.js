import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const TopBar = ({ searchAction }) => {
  return (
    <div id="outer-container">
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
          <Link to="create/user">
            <button className="nightlife-button">
              Create User
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

TopBar.propTypes = {
  searchAction: PropTypes.function
}

export default TopBar
