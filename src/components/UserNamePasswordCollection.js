import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {
  setUserInputAction,
  setPasswordInputAction
 } from '../actions/inputs'
 import NightlifeButton from './NightlifeButton'

class UserNamePasswordCollection extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e){
    e.preventDefault()
    const { onSubmit, userName, password } = this.props
    onSubmit(userName, password)
    browserHistory.push('/')
  }

  render() {
    return (
      <div className="outer-input-form">
        <form className="input-form center-content" onSubmit={this.onSubmit}>
          <label to="user-name-input" className="label">User Name: </label>
          <input
            id="user-name-input"
            value={this.props.userName}
            onChange={(e) => this.props.userOnChange(e.target.value)}
            type="text"
            className="nightlife-input"
          />
          <label to="user-password-input" className="label">Password</label>
          <input
            id="user-password-input"
            value={this.props.password}
            onChange={(e) => this.props.passwordOnChange(e.target.value)}
            className="nightlife-input"
            type="password"
          />
          <NightlifeButton
            className="nightlife-button"
            onSubmit={this.onSubmit}>{this.props.buttonText}
          </NightlifeButton>
        </form>
      </div>
    )
  }
}

UserNamePasswordCollection.propTypes = {
  buttonText: PropTypes.string.isRequired,
  password: PropTypes.string,
  userName: PropTypes.string,
  userOnChange: PropTypes.func,
  passwordOnChange: PropTypes.func,
  onSubmit: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    userName: state.userLogin.user,
    password: state.userLogin.password
  }
}

const dispatchToProps = (dispatch) => {
  return {
    userOnChange: (userName) => dispatch(setUserInputAction(userName)),
    passwordOnChange: (password) => dispatch(setPasswordInputAction(password))
  }
}

export default connect(
  mapStateToProps,
  dispatchToProps
  )(UserNamePasswordCollection)
