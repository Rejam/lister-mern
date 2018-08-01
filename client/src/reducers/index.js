import { combineReducers } from 'redux'
import list_reducer from './listReducer'
import current_list_reducer from './currentListReducer'
// import user_reducer from './userReducer

export default combineReducers({
  list: list_reducer,
  current: current_list_reducer
})