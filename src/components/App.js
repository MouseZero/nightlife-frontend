import React from 'react'
import PropTypes from 'prop-types'
import TopBar from './top-bar'
import BottomBar from './BottomBar'

const App = (props) => {
    return (
      <div id="app-component">
        <TopBar/>
        {props.children}
        <BottomBar/>
      </div>
    )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
