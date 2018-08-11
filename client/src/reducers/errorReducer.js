import { fetch_actions } from "../actions/fetch_actions";

const initialState = {
  hasError: false,
  msg: ''
}

const errorReducer = (state= initialState, action) => {
  switch(action.type) {
    case fetch_actions.FETCH_FAILURE:
      return {
        hasError: true,
        msg: action.error
      }
    case fetch_actions.FETCH_BEGIN:
    case fetch_actions.FETCH_SUCCESS:
      return {
        hasError: false,
        msg: ""
      }
    default:
      return state
  }
}

export default errorReducer