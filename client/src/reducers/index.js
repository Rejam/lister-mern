import { combineReducers } from 'redux'
import list_reducer from './listReducer'

export default combineReducers({
  lists: list_reducer,
})