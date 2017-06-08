import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const BusinessResult = ({info}) => {
  const {
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
                People Going: {users_going}
              </div>
              <div>
                Phone: {display_phone}
              </div>
              <div>
                {(is_closed) ? 'Closed' : 'Open'}
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
return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessResult)
