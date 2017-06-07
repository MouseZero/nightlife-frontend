import React from 'react'
import LoginButtons from './BottomBar/LoginButtons'
import LogoutButton from './BottomBar/LogoutButton'
import { setToken } from '../actions/user'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class BottomBar extends React.Component {
  constructor(props){
    super(props)
    this.content = this.content.bind(this)
  }

  componentWillMount() {
    const token = sessionStorage.getItem('token')
    if (token) this.props.setToken(token)
  }

  content(token) {
    if (!token) return <LoginButtons/>
    return <LogoutButton/>
  }

  render() {
    return (
      <div id="bottom-bar-container">
        {this.content(this.props.token)}
      </div>
    )
  }
}

BottomBar.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    token: state.userLogin.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomBar)
