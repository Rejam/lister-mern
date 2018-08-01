import { FETCH_LISTS } from '../actions/types'

const listReducer = (state = [], action) => {
  switch(action.type) {
    case(FETCH_LISTS):
      return action.payload

    default:
      return state
  } 
}

export default listReducer