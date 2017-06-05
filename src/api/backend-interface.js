import { post, get } from './easy-requests'
import fetch from 'node-fetch'
const doPost = post(fetch)
const doGet = get(fetch)
const BASEURL = process.env.BACKEND_URL

const createUser = (baseurl) => (userName, password) => {
  return doPost({
    name: userName,
    password
  },
  baseurl + 'users'
  )
}

const authenticate = (baseurl) => (userName, password) => {
  return doPost({
    user: userName,
    password
  },
  baseurl + 'authenticate'
  )
}

const backendInterface = {
  createUser: createUser(BASEURL),
  authenticate: authenticate(BASEURL)
}


export {
  backendInterface as default,
  createUser,
  authenticate
}
