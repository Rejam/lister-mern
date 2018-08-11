import {fetch_actions} from '../actions/fetch_actions'
import {list_actions} from '../actions/list_actions';


const initialState = {
  isFetching: false,
  error: '',
  byId: {},
  allIds: []
}

const listReducer = (state = initialState, action) => {
  switch(action.type) {

    case(fetch_actions.FETCH_SUCCESS): {
      return {
        ...state,
        ...action.payload, 
        error: '',
        isFetching: false
      }
    }

    case(list_actions.CREATE_LIST_REQUEST): {
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    }

    case(list_actions.CREATE_LIST_SUCCESS): {
      return {
        ...state,
        error: '',
        isFetching: false,
        byId: {...state.byId, [action.list._id]: action.list},
        allIds: [...state.allIds, action.list._id]
      }
    }

    case(list_actions.CREATE_LIST_FAILURE): {
      return { ...state, err: action.error }
    }

    case(list_actions.DELETE_LIST_REQUEST): {
      return {
        ...state,
        isFetching: true,
        error: ""
      }
    }

    case(list_actions.DELETE_LIST_SUCCESS): {
      const { [action.list._id]: toRemove,  ...restOfList } = state.byId
      return {
        ...state,
        isFetching: false,
        error: "",
        byId: restOfList,
        allIds: state.allIds.filter(id => id !== action.list._id)
      }
    }
    default:
      return state
  } 
}

export default listReducer