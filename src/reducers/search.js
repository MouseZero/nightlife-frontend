export default function(
state = {locationInput: '', businesses: []},
action) {
  switch(action.type) {

    case 'SET_LOCATION_INPUT':
      return Object.assign({}, state, {
        locationInput: action.location
      })

    case 'SET_BUSINESSES':
      return Object.assign({}, state, {
        businesses: action.businesses
      })

    default:
      return state
  }
}
