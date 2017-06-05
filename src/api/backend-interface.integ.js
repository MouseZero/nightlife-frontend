import {
  createUser,
  authenticate
} from './backend-interface'
import assert from 'assert'
const BACKEND_URL = 'http://localhost:3033/'
let TOKEN = ''

describe('backend-interface', () => {
  describe('createUser', () => {
    it('Should be able to create user', async () => {
      try {
        const result = await createUser(BACKEND_URL)('test', 'password')
        assert(result.success, 'should have created user')
      } catch (error) {
        assert(false,
        `Threw an error while trying to create user` + error)
      }
    })
  })
  describe('authenticate', () => {
    it('authenticates user', async () => {
      try {
        const result = await authenticate(BACKEND_URL)('test', 'password')
        TOKEN = result.token
        console.log(TOKEN)
        assert(result.success, 'should have authenticated user')
      } catch (error) {
        assert(false,
        'Threw an error while trying to authenticate user')
      }
    })
  })
})
