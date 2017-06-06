import React from 'react'
import { connect } from 'react-redux'

const Notification = ({type, msg}) => {
  return (
    <div className={type}>
      {msg}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    type: 'notification',
    msg: 'This is a test message'
  }
}

export default connect(mapStateToProps)(Notification)
