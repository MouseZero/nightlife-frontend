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

    case 'TOGGLE_GOING_STATUS':
      return (function() {
        const index = getIndex(state.businesses, action.barId)
        const yourGoing = !(state.businesses[index]['your_going'])
        const usersGoing = (yourGoing) ?
          state.businesses[index]['users_going'] + 1 :
          state.businesses[index]['users_going'] - 1

        return Object.assign({}, state, {
          businesses: state.businesses.slice(0, index)
            .concat([
              Object.assign({}, state.businesses[index], {
                'your_going': yourGoing,
                'users_going': usersGoing
              })
            ])
            .concat(state.businesses.slice(index+1))
        })
      }())

    default:
      return state
  }
}

function getIndex(array, barId) {
  return array.reduce((p, {id}, i) => {
    return (barId === id) ? i : p
  }, -1)
}
