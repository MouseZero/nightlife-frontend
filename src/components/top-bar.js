import React from 'react'
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
          <input id="bar-search" className="nightlife-input" placeholder="City" onSubmit={searchAction} />
        </div>
      </div>
    </div>
  )
}

TopBar.propTypes = {
  searchAction: PropTypes.function
}

export default TopBar
