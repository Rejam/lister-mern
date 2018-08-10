import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/fetch_actions";

const loadingReducer = (isLoading=true, action) => {
  switch(action.type) {
    case FETCH_BEGIN:
      return true
    case FETCH_SUCCESS:
    case FETCH_FAILURE:
      return false
    default:
      return isLoading
  }
}

export default loadingReducer