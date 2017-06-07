import React from 'react'
import LoginButtons from './BottomBar/LoginButtons'
import LogoutButton from './BottomBar/LogoutButton'
import { connect } from 'react-redux'

const content = (token) => {
  if (!token) return <LoginButtons/>
  return <LogoutButton/>
}

const BottomBar = ({token}) => {
  return (
    <div id="bottom-bar-container">
      {content(token)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.userLogin.token
  }
}

export default connect(mapStateToProps)(BottomBar)
