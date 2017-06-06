import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Notification = ({type, text}) => {
  return (
    <div className={'notification ' + type}>
      {text}
    </div>
  )
}

Notification.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
}

const mapStateToProps = ({notifications}) => {
  return {
    type: notifications.type,
    text: notifications.text
  }
}

export default connect(mapStateToProps)(Notification)
