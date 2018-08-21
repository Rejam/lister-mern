import { combineReducers } from "redux";
import list_reducer from "./listReducer";
import fetching_reducer from "./fetchingReducer";
import error_reducer from "./errorReducer";

export default combineReducers({
  isFetching: fetching_reducer,
  lists: list_reducer,
  error: error_reducer
});
