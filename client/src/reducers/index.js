import { combineReducers } from 'redux'
import list_reducer from './listReducer'
import loading_reducer from './loadingReducer'
import error_reducer from './errorReducer'

export default combineReducers({
  isLoading: loading_reducer,
  lists: list_reducer,
  error: error_reducer
})