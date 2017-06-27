

const analyzedTest =( state={}, action ) => {
  switch ( action.type ) {
    case 'ADD_TEXT':
      return action.state
    default:
      return state
  }
}

export default analyzedTest
