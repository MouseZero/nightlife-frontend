import {
  createUser,
  authenticate,
  removeUser,
  search
} from './backend-interface'
import assert from 'assert'
const BACKEND_URL = 'http://localhost:3033/'
let TOKEN = ''

/*------------ WARNING --------------
These test have a temporal coupling meaning some of them
have to be in order.*/

describe('Warning -- temporal coupling', function() {
  this.timeout(20000)
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
          assert(result.success, 'should have authenticated user')
        } catch (error) {
          assert(false,
          'Threw an error while trying to authenticate user')
        }
      })
    })
    describe('search', () => {
      it('should get search results', async () => {
        try {
          const result = await search(BACKEND_URL)('irvine', TOKEN)
          assert(result.success, 'should have had a successful search')
        } catch (error) {
          assert(false,
          'Threw an error while it was trying to search for bars')
        }
      })
    })
    describe('removeUser', () => {
      it('should delete user', async () => {
        try {
          const result = await removeUser(BACKEND_URL)(TOKEN)
          assert(result.success, 'should have deleted user')
        } catch (error) {
          assert(false,
          'Threw an error while trying to delete user')
        }
      })
    })
  })
})
