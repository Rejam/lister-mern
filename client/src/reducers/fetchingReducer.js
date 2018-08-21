import { fetch_actions } from "../actions/fetch_actions";

const initialState = {
  isFetching: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_actions.FETCH_BEGIN:
      return {
        isFetching: true
      };
    case fetch_actions.FETCH_SUCCESS:
      return {
        isFetching: false
      };
    case fetch_actions.FETCH_FAILURE:
      return {
        isFetching: false
      };
    default:
      return state;
  }
};
export default loadingReducer;
