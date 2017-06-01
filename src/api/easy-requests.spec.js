import { post, get } from './easy-requests'
import assert from 'assert'
import sinon from 'sinon'

describe('easy-requests', () => {
  describe('get', () => {
    it('calls fetch with the correct params', async () => {
      const fetch = sinon.spy(() => Promise.resolve({
          json: () => { return {test: "worked"} }
        })
      )

      await get(fetch)({
          foo: 'bar',
          baz: 'qux',
          quux: 'corge'
        }, 'https://someurl.com',
        'mytoken')

      const arg1 = fetch.args[0][0]
      const arg2 = fetch.args[0][1]
      assert.equal(arg1, 'https://someurl.com?foo=bar&baz=qux&quux=corge')
      assert.deepEqual(arg2, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-access-token': 'mytoken'
        },
      })
    })
  })
  it('keeps url the same if no params are passed', async () => {
      const fetch = sinon.spy(() => Promise.resolve({
          json: () => { return {test: "worked"} }
        })
      )

      await get(fetch)({}, 'https://someurl.com')

      const arg1 = fetch.args[0][0]
      assert.equal(arg1, 'https://someurl.com')
  })
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
    it('calls fetch the correct way with token', async () => {
      const fetch = sinon.spy(() => {
          return Promise.resolve({
            json: () => { return {} }
          })
        }
      )
      await post(fetch)({
        user: 'bill',
        password: 'password'
      }, 'https://someurl.com',
      'mytoken')

      const arg1 = fetch.args[0][0]
      const arg2 = fetch.args[0][1]
      assert.equal(arg1, 'https://someurl.com')
      assert.deepEqual(arg2, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-access-token': 'mytoken'
        },
        body: 'user=bill&password=password'
      })

    })
    it('calls fetch the correct way without token', async () => {
      const fetch = sinon.spy(() => {
          return Promise.resolve({
            json: () => { return {} }
          })
        }
      )
      await post(fetch)({
        user: 'bill',
        password: 'password'
      }, 'https://someurl.com')

      const arg1 = fetch.args[0][0]
      const arg2 = fetch.args[0][1]
      assert.equal(arg1, 'https://someurl.com')
      assert.deepEqual(arg2, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'user=bill&password=password'
      })
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
})
