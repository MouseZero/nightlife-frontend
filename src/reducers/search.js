export default function(state = {locationInput: ''}, action) {
  switch(action.type) {

    case 'SET_LOCATION_INPUT':
      return Object.assign({}, state, {
        locationInput: action.location
      })

    default:
      return state
  }
}
