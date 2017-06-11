import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'
import NightlifeButton from '../NightlifeButton'

const LogoutButton = ({ logMeOut }) => {
  return (
    <div className="login-group">
      <NightlifeButton isAltButton={true} onClick={logMeOut}>
        Logout
      </NightlifeButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logMeOut: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(LogoutButton)
