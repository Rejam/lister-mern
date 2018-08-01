import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducer from '../reducers'

const initialState = {
  current: null,
  lists: [],
  user: null
}

const middleware = applyMiddleware(reduxPromise)

export default createStore(reducer, initialState, middleware)