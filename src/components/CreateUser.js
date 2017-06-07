import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/user'
import UserNamePasswordCollection from './UserNamePasswordCollection'
import AlreadyLoggedIn from './AlreadyLoggedIn'

const CreateUser = (props) => {
  if(props.token) return (<AlreadyLoggedIn/>)
  return (
  <UserNamePasswordCollection
    buttonText="Create User"
    onSubmit={props.createUser}
  />
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.userLogin.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: function (userName, password) {
      dispatch(createUser(userName, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
