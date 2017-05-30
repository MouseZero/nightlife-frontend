import React from 'react'

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="title">
        Nightlife App
      </div>
      <div className="tag-line">
        See which bars are popular tonight and RSVP ahead of time!
      </div>
      <div className="nightlife-input-group">
        <label className="nightlife-label">Search Area</label>
        <br/>
        <input className="nightlife-input" maxlength="100"/>
        <br/>
        <span>What city are you spending the evening in</span>
      </div>
    </div>
  )
}

export default TopBar
