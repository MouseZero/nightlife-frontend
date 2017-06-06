export default function(state = {}, action){
  switch(action.type) {

    case 'NOTIFICATION':
      return Object.assign({}, state, {
        text: action.msg,
        type: action.notificationType
      })

    case 'NOTIFICATION_CLEAR':
      return Object.assign({}, state, {
        text: '',
        type: ''
      })

    default:
      return state

  }
}
