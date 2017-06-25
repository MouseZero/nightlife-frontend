import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSearchInput, searchAction } from '../actions/search'
import NightlifeButton from './NightlifeButton'

class TopBar extends React.Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.setInputUpdate = this.setInputUpdate.bind(this)
  }
  onSubmit(event) {
    event.preventDefault()
    this.props.search(this.props.locationText, this.props.token)
  }

  setInputUpdate(event) {
    this.props.setLocationInput(event.target.value)
  }

  render() {
    return (
    <div id="outer-container">
      <div className="top-bar">
        <div className="title">
          Nightlife Bar Attendance
        </div>
        <div className="tag-line">
          See which bars are popular tonight!
        </div>
        <div className="nightlife-input-group">
          <form onSubmit={this.onSubmit}>
            <div>
              <input
                id="bar-search"
                className="nightlife-input"
                placeholder="Location"
                onChange={this.setInputUpdate}
              />
            </div>
            <div>
              <NightlifeButton onClick={this.onSubmit}>
                Search
              </NightlifeButton>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
  }
}

TopBar.propTypes = {
  search: PropTypes.func,
  setLocationInput: PropTypes.func,
  locationText: PropTypes.string
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (location, token) => dispatch(searchAction(location, token)),
    setLocationInput: (location) => dispatch(setSearchInput(location)),
  }
}

const mapStateToProps = (state) => {
  return {
    locationText: state.search.locationInput,
    token: state.userLogin.token
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
