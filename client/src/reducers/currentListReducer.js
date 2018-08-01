import { CHANGE_CURRENT } from '../actions/types'

const currentListReducer = (state = "", action) => {
  if(action.type === CHANGE_CURRENT) {
    return action.payload
  }
  return state
}