import { FETCH_FAILURE, FETCH_BEGIN, FETCH_SUCCESS } from "../actions/types";

const initialState = {
  hasError: false,
  msg: ''
}

const errorReducer = (state= initialState, action) => {
  switch(action.type) {
    case FETCH_FAILURE:
      return {
        hasError: true,
        msg: action.error
      }
    case FETCH_BEGIN:
    case FETCH_SUCCESS:
      return {
        hasError: false,
        msg: ""
      }
    default:
      return state
  }
}

export default errorReducer