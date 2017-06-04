export default function(state = {}, action){
  switch(action.type){

    case 'SET_USER_INPUT':
      return Object.assign({}, state, {
        user: action.user
      })

    default:
      return state
  }
}
