import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'

class DefaultPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (_.isEmpty(this.props.businesses)) {
      return (<div>There are no search Results</div>)
    }
    return (
      <div>
        Search Worked
      </div>
    )
  }
}

DefaultPage.propTypes = {
  businesses: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    businesses: state.search.businesses
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage)
