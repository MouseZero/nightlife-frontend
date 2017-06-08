import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import backendInterface from '../api/backend-interface'
const { goingToBar } = backendInterface

const BusinessResult = ({info}) => {
  const {
    id,
    name,
    display_phone,
    image_url,
    is_closed,
    users_going
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
                Phone: {display_phone}
              </div>
              <div>
                {(is_closed) ? 'Closed' : 'Open'}
              </div>
              <div>
                <button className="nightlife-button">
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
  info: PropTypes.object
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    setGoing: (id) => dispatch(gointToBar(id, ))
  }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return Object.assigne({},
    stateProps,
    dispatchProps,
    ownProps
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps)
  (BusinessResult)
