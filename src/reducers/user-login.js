export default function(state = {}, action){
  switch(action.type){

    case 'SET_USER_INPUT':
      return Object.assign({}, state, {
        user: action.user
      })

    case 'SET_PASSWORD_INPUT':
      return Object.assign({}, state, {
        password: action.password
      })

    default:
      return state
  }
}
