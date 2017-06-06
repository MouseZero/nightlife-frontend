import React from 'react'
import { connect } from 'react-redux'
import UserNamePasswordCollection from './UserNamePasswordCollection'
import { authenticate } from '../actions/user'

const Login = (props) => {
  return (
    <UserNamePasswordCollection
      buttonText="Login"
      onSubmit={props.authenticate}
    />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: function (userName, password) {
      dispatch(authenticate(userName, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
