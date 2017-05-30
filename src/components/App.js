import React from 'react'
import PropTypes from 'prop-types'
import TopBar from './top-bar'

const App = (props) => {
    return (
      <div id="app-component">
        <TopBar/>
        {props.children}
      </div>
    )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
