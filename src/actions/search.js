import backendInterface from '../api/backend-interface'
import { notifyError } from './notification'

const setSearchInput = (location) => {
  return {
    type: 'SET_LOCATION_INPUT',
    location
  }
}

const setBusinesses = (businesses) => {
  return {
    type: 'SET_BUSINESSES',
    businesses
  }
}

const searchAction = (location, token) => (dispatch) => {
  backendInterface.search(location, token)
  .then(({success, result, message}) => {
    console.log(Object.keys(result))
    if (success) {
      dispatch(setBusinesses(result.businesses))
    } else {
      notifyError(message, dispatch)
    }
  })
  .catch(() => notifyError('Was not able to search', dispatch))
}

export {
  setSearchInput,
  searchAction
}
