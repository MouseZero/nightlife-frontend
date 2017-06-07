export default function(
state = {user: '', password: '', token: ''},
action){
  switch(action.type){

    case 'SET_USER_INPUT':
      return Object.assign({}, state, {
        user: action.user
      })

    case 'SET_PASSWORD_INPUT':
      return Object.assign({}, state, {
        password: action.password
      })

    case 'SET_TOKEN':
      return Object.assign({}, state, {
        token: action.token
      })

    case 'LOGOUT':
      console.log('really trying to LOGOUT')
      return Object.assign({}, state,{
        token: ''
      })

    default:
      return state
  }
}
