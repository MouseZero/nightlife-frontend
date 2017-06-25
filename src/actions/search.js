import { search, goingToBar } from '../api/backend-interface'
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

const toggleGoingStatus = (barId) => {
  return {
    type: 'TOGGLE_GOING_STATUS',
    barId
  }
}

const searchAction = (location, token) => (dispatch) => {
  search(location, token)
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
  if (!token) {
    notifyError('Please login', dispatch)
    return
  }
  goingToBar(bar_id, token)
  .then(({ success, message }) => {
    if(success) {
      dispatch(toggleGoingStatus(bar_id))
    } else {
      notifyError(message, dispatch)
    }
  })
  .catch((e) => notifyError('Was unable to set you as "going"' + e, dispatch))
}

export {
  setSearchInput,
  searchAction,
  setGoing
}
