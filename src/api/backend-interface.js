import easyRequest from './easy-requests'
import fetch from 'node-fetch'
const { post, get, remove } = easyRequest(fetch)
const BASEURL = process.env.BACKEND_URL

const createUser = (baseurl) => (userName, password) => {
  return post({
    name: userName,
    password
  },
  baseurl + 'users'
  )
}

const authenticate = (baseurl) => (userName, password) => {
  return post({
    user: userName,
    password
  },
  baseurl + 'authenticate'
  )
}

const search = (baseurl) => (location, token) => {
  return get({
    location
  },
  baseurl + 'search',
  token)
}

const removeUser = (baseurl) => (token) => {
  return remove({},
  baseurl + 'users',
  token
  )
}

const backendInterface = {
  createUser: createUser(BASEURL),
  authenticate: authenticate(BASEURL),
  search: search(BASEURL)
}


export {
  backendInterface as default,
  createUser,
  authenticate,
  removeUser,
  search
}
