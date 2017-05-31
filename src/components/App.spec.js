import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import assert from 'assert'

describe('<App>', () => {
  it('renders children', () => {
    const wrapper = shallow(
      <App>
          <div id="test-child"></div>
      </App>
    )
    assert(wrapper.contains(<div id="test-child"></div>))

  })
})
