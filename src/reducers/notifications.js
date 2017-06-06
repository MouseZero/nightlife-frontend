export default function(state = {}, action){
  switch(action.type) {

    case 'NOTIFICATION':
      return Object.assign({}, state, {
        notification: action.msg
      })

    case 'NOTIFICATION_CLEAR':
      return Object.assign({}, state, {
        notification: ''
      })

    default:
      return state

  }
}
