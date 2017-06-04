import { post, get } from './easy-requests'
import fetch from 'node-fetch'
const doPost = post(fetch)
const doGet = get(fetch)
const BASEURL = 'https://nightlife-backend-fcc.herokuapp.com/'

const createUser = (userName, password) => {
  return doPost({
    name: userName,
    password
  },
  BASEURL + 'users'
  )
}

export {
  createUser
}
