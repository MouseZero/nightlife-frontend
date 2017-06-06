import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Notification = ({type, msg}) => {
  return (
    <div className={type}>
      {msg}
    </div>
  )
}

Notification.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string
}

const mapStateToProps = ({notifications}) => {
  return {
    type: 'notification',
    msg: notifications.notification
  }
}

export default connect(mapStateToProps)(Notification)
