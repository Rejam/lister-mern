import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from '../reducers'

const initialState = {
  lists: [],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, initialState, composeEnhancers(
  applyMiddleware(reduxPromise)
))