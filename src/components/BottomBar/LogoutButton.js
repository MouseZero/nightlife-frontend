import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'

const LogoutButton = ({ logMeOut }) => {
  return (
    <div className="login-group">
      <button className="nightlife-button bottom-button" onClick={logMeOut}>
        Logout
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logMeOut: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LogoutButton)
