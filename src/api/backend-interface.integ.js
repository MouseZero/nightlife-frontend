import { createUser } from './backend-interface'
import assert from 'assert'

describe('backend-interface', () => {
  describe('createUser', () => {
    it('Should be able to create user', async () => {
      try {
        const result = createUser('test', 'password')
        assert(result.success, 'should have created user')
      } catch (error) {
        assert(false,
        `Threw an error while trying to create user` + error)
      }
    })
  })
})
