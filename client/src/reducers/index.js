import { combineReducers } from 'redux'
import list_reducer from './listReducer'
import current_list_reducer from './currentListReducer'

export default combineReducers({
  lists: list_reducer,
  currentList: current_list_reducer
})