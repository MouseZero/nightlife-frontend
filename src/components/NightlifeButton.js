import React from 'react'
import PropTypes from 'prop-types'

const classes = (isAltButton, className) => {
  let classes = 'nightlife-button'
  if (isAltButton) classes += ' alt-btn'
  if (className) classes += ' ' + className
  return classes
}

const NightlifeButton = ({isAltButton, onClick, children, className}) => {
  return (
    <button className={classes(isAltButton, className)} onClick={onClick}>
      {children}
    </button>
  )
}
NightlifeButton.propTypes = {
  isAltButton: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default NightlifeButton
