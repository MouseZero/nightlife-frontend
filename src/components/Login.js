import React from 'react'
import { connect } from 'react-redux'
import UserNamePasswordCollection from './UserNamePasswordCollection'
import { authenticate } from '../actions/user'
import AlreadyLoggedIn from './AlreadyLoggedIn'
import PropTypes from 'prop-types'

const Login = (props) => {
  if (props.token) return (<AlreadyLoggedIn/>)
  return (
    <UserNamePasswordCollection
      buttonText="Login"
      onSubmit={props.authenticate}
    />
  )
}

Login.propTypes = {
  token: PropTypes.string,
  authenticate: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    token: state.userLogin.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: function (userName, password) {
      dispatch(authenticate(userName, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
