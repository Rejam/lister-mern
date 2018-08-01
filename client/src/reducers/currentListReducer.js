import { FETCH_A_LIST } from '../actions/types'

const currentListReducer = (state = {}, action) => {
  switch(action.type){
    case(FETCH_A_LIST):
      return action.payload
    
    default:
      return state
  }
}

export default currentListReducer