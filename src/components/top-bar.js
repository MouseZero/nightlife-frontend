import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { search } from '../actions/user'
import { setSearchInput } from '../actions/search'

/*

TODO

need to attache this input box to redux then create an action for searching














*/

class TopBar extends React.Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.inputUpdate = this.inputUpdate.bind(this)
  }
  onSubmit(event) {
  }

  inputUpdate(event) {
    this.props.locationInput(event.target.value)
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
            <input
              id="bar-search"
              className="nightlife-input"
              placeholder="City"
              onChange={this.inputUpdate}
            />
          </form>
        </div>
      </div>
    </div>
    )
  }
}

TopBar.propTypes = {
  search: PropTypes.func,
  locationInput: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (location, token) => dispatch(search(location, token)),
    locationInput: (location) => dispatch(setSearchInput(location))
  }
}

export default connect(null, mapDispatchToProps)(TopBar)
