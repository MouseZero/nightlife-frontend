import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setGoing } from '../actions/search'

const goingAndNotGoingIndicator = (your_going) => {
  if (your_going) {
    return (
      <div>
        <i className="fa fa-check green" aria-hidden="true"></i> Going
      </div>
    )
  }
}

const BusinessResult = ({info, setGoing, token, key}) => {
  const {
    id,
    name,
    display_phone,
    image_url,
    is_closed,
    users_going,
    your_going
  } = info
  return (
    <div className="bar-container">
      <div className="pad"/>
        <div className="bar-card">
          <div className="bar-title">
            {name}
          </div>
          <div className="bar-content">
            <div className="image-container">
              <img className="bar-thumb" src={image_url}/>
            </div>
            <div className="bar-status">
              <div>
                Users Going {users_going}
              </div>
              <div>
                {goingAndNotGoingIndicator(your_going)}
              </div>
              <div>
                Phone: {display_phone}
              </div>
              <div>
                {(is_closed) ? 'Closed' : 'Open'}
              </div>
              <div>
                <button
                  className="nightlife-button"
                  onClick={() => setGoing(id, token)}
                >
                Going
                </button>
              </div>
            </div>
          </div>
        </div>
      <div className="pad"/>
    </div>
  )
}
BusinessResult.propTypes = {
  info: PropTypes.object,
  setGoing: PropTypes.func,
  token: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    token: state.userLogin.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setGoing: (bar_id, token) => dispatch(setGoing(bar_id, token))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessResult)
