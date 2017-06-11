import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import BusinessResult from './BusinessResult'

class DefaultPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const businesses = this.props.businesses
    if (_.isEmpty(businesses)) {
      return (<div className="center-content">There are no search Results</div>)
    }
    return (
      <div>
        {businesses.map((x,i) => {
          return (
            <BusinessResult key={i} info={x}/>
          )
        })}
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
