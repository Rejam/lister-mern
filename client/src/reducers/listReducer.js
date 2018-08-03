import { FETCH_SUCCESS } from '../actions/types'

const initialState = {
  byId: {},
  allIds: []
}

const listReducer = (state = initialState, action) => {
  switch(action.type) {

    case(FETCH_SUCCESS):
      return action.payload

    default:
      return state
  } 
}

export default listReducer