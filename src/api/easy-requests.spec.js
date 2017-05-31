import EasyRequests from './easy-requests'
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
  it('throws error if fetch throws error', async () => {
    const fetch = () => Promise.reject(new Error('some error'))
    let error
    try {
      await EasyRequests(fetch)()
    } catch (e) { error = e }

    if(!error) throw new Error('should have thrown an error')
  })

})
