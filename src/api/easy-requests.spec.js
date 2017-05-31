import EasyRequests from './easy-requests.js'
import assert from 'assert'

describe('easyRequest', () => {
  it('is a function', () => {
    assert(typeof EasyRequests === 'function')
  })
  it('returns json from fetch', async () => {
    const fetch = () => Promise.resolve({
      json: () => { return {test: "worked"} }
    })
    const easyRequests = EasyRequests(fetch)
    assert.deepEqual(
      await easyRequests(),
      {test: "worked"},
      'did not return json from fetch'
    )
  })
  it('throws error if fetch throws error')
})
