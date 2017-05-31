import React from 'react'
import { shallow } from 'enzyme'
import TopBar from './top-bar'
import assert from 'assert'
import sinon from 'sinon'

describe('top-bar', () => {
  it('contains input field', () => {
    const wrapper = shallow(<TopBar/>)
    assert.equal(
      wrapper.find('input').length,
      1,
      'should have 1 input'
    )
  })
  it('contains a title', () => {
    const wrapper = shallow(<TopBar/>)
    assert.equal(
      wrapper.find('.title').length,
      1,
      'should have 1 title'
    )
  })
  it('should call action when enter is pressed on the input', () => {
    const spy = sinon.spy()
    const wrapper = shallow(<TopBar searchAction={spy}/>)
    wrapper.find('input').simulate('submit')
    assert.equal(spy.callCount, 1, 'Should have called searchAction once')
  })
})
