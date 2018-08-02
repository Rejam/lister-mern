import { FETCH_LISTS, FETCH_A_LIST } from '../actions/types'

const listReducer = (state = [], action) => {
  switch(action.type) {

    case(FETCH_LISTS):
      return action.payload

    case(FETCH_A_LIST):
      const exists = state.findIndex(l => l._id === action.payload._id) > 0
      return [action.payload] //exists ? state : [action.payload, ...state] 

    default:
      return state
  } 
}

export default listReducer