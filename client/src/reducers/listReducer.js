import { FETCH_LISTS, FETCH_A_LIST } from './types'

const listReducer = (state = [], action) => {
  switch(action.type) {
    case(FETCH_LISTS):
      return action.payload

    case(FETCH_A_LIST):
      return action.payload

    default:
      return state
  } 
}

export default listReducer