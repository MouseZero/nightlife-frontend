import React from 'react'

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="title">
        Nightlife Bar Attendance
      </div>
      <div className="tag-line">
        See which bars are popular tonight!
      </div>
      <div className="nightlife-input-group">
        <input className="nightlife-input" maxlength="100"/>
        <br/>
        <span>What city are you spending the evening in</span>
      </div>
    </div>
  )
}

export default TopBar
