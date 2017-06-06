import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/user'
import UserNamePasswordCollection from './UserNamePasswordCollection'

const CreateUser = (props) => {
  return (
  <UserNamePasswordCollection
    buttonText="Create User"
    onSubmit={props.createUser}
  />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: function (userName, password) {
      dispatch(createUser(userName, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateUser)
