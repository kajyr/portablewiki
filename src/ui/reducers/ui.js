

const ui = (state = '', action) => {
  switch (action.type) {
    case 'WEIGHTS_LIST_LOADED':
      return action.list
    case 'ADDED_WEIGHT':
      return [
      	...state,
      	weight(action.id, action.value, action.date)
      ]
    default:
      return state
  }
}

export default ui