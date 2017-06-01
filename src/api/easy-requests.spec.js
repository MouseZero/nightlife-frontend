import { easyRequest } from './easy-requests'
import assert from 'assert'

describe('easyRequest', () => {
  it('is a function', () => {
    assert(typeof easyRequest === 'function')
  })
  it('returns json from fetch', async () => {
    const fetch = () => Promise.resolve({
      json: () => { return {test: "worked"} }
    })
    assert.deepEqual(
      await easyRequest(fetch)(),
      {test: "worked"},
      'did not return json from fetch'
    )
  })
  it('throws error if fetch throws error', async () => {
    const fetch = () => Promise.reject(new Error('some error'))
    let error
    try {
      await easyRequest(fetch)()
    } catch (e) { error = e }

    if(!error) throw new Error('should have thrown an error')
  })

})
