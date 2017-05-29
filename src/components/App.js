import React from 'react'
import PropTypes from 'prop-types'

const App = (props) => {
    return (
      <div className="bg">
      Hello from component
      {props.children}
      </div>
    )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
