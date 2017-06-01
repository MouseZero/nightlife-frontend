import { post } from './easy-requests'
import assert from 'assert'
import sinon from 'sinon'

describe('post', () => {
  it('returns json from fetch', async () => {
    const fetch = () => Promise.resolve({
      json: () => { return {test: "worked"} }
    })
    assert.deepEqual(
      await post(fetch)(),
      {test: "worked"},
      'did not return json from fetch'
    )
  })
  it('calls fetch the correct way without token', async () => {
    const fetch = sinon.spy((a, b) => {
        return Promise.resolve({
          json: () => { return {} }
        })
      }
    )
    await post(fetch)({
      user: 'bill',
      password: 'password'
    }, 'https://someurl.com')

    assert(fetch.calledWith('https://someurl.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'user=bill&password=password'
    }))

  })
  it('throws error if fetch throws error', async () => {
    const fetch = () => Promise.reject(new Error('some error'))
    let error
    try {
      await post(fetch)()
    } catch (e) { error = e }

    if(!error) throw new Error('should have thrown an error')
  })

})
