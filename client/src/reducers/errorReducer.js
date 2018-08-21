import { fetch_actions } from "../actions/fetch_actions";
import { list_actions } from "../actions/list_actions";
import { item_actions } from "../actions/item_actions";

const initialState = {
  hasError: false,
  msg: ""
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_actions.FETCH_FAILURE:
    case list_actions.CREATE_LIST_FAILURE:
    case list_actions.DELETE_LIST_FAILURE:
    case item_actions.ADD_ITEM_FAILURE:
    case item_actions.DELETE_ITEM_FAILURE:
      return {
        hasError: true,
        msg: action.error
      };

    case fetch_actions.FETCH_SUCCESS:
    case list_actions.CREATE_LIST_SUCCESS:
    case list_actions.DELETE_LIST_SUCCESS:
    case item_actions.ADD_ITEM_SUCCESS:
    case item_actions.DELETE_ITEM_SUCCESS:
      return {
        hasError: false,
        msg: ""
      };
    default:
      return state;
  }
};

export default errorReducer;
