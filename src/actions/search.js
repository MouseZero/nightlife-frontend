import backendInterface from '../api/backend-interface'
import { notifyError, notifyGood } from './notification'

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
    if (success) {
      dispatch(setBusinesses(result.businesses))
    } else {
      notifyError(message, dispatch)
    }
  })
  .catch(() => notifyError('Was not able to search', dispatch))
}

const setGoing = (bar_id, token) => (dispatch) => {
  backendInterface.goingToBar(bar_id, token)
  .then(({ success, message }) => {
    if(success) {
      notifyGood('it worked', dispatch)
    } else {
      notifyError(message, dispatch)
    }
  })
  .catch(() => notifyError('Was unable to set you as "going"', dispatch))
}

export {
  setSearchInput,
  searchAction,
  setGoing
}
