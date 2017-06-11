import React from 'react'
import PropTypes from 'prop-types'

const classes = (isAltButton) => {
  return (isAltButton) ? 'nightlife-button alt-btn' : 'nightlife-button'
}

const NightlifeButton = ({isAltButton, onClick, children}) => {
  return (
    <button className={classes(isAltButton)} onClick={onClick}>
      {children}
    </button>
  )
}
NightlifeButton.propTypes = {
  isAltButton: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default NightlifeButton
