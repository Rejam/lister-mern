import { fetch_actions } from "../actions/fetch_actions";

const loadingReducer = (isLoading=true, action) => {
  switch(action.type) {
    case fetch_actions.FETCH_BEGIN:
      return true
    case fetch_actions.FETCH_SUCCESS:
    case fetch_actions.FETCH_FAILURE:
      return false
    default:
      return isLoading
  }
}
export default loadingReducer