import { fetch_actions } from "../actions/fetch_actions";
import { list_actions } from "../actions/list_actions";
import { item_actions } from "../actions/item_actions";

const initialState = {
  byId: {},
  allIds: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_actions.FETCH_SUCCESS:
      return {
        ...action.payload
      };

    case list_actions.CREATE_LIST_SUCCESS:
      return {
        byId: { ...state.byId, [action.list._id]: action.list },
        allIds: [...state.allIds, action.list._id]
      };

    case list_actions.DELETE_LIST_SUCCESS:
      const { [action.list._id]: toRemove, ...restOfList } = state.byId;
      return {
        byId: restOfList,
        allIds: state.allIds.filter(id => id !== action.list._id)
      };

    case item_actions.ADD_ITEM_SUCCESS:
      const updatedList = {
        ...state.byId[action.list_id],
        items: [...state.byId[action.list_id].items, action.newItem]
      };
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.list_id]: updatedList
        }
      };
    case item_actions.DELETE_ITEM:

    default:
      return state;
  }
};

export const listSelector = (state, list_id) => state.lists.byId[list_id];

export default listReducer;
