import { FETCH_LISTS, FETCH_A_LIST } from './types'
import api from '../services/listAPI'

const fetchLists = () => ({
  type: FETCH_LISTS,
  payload: api.fetchLists()
})

const fetchAList = id => ({
  type: FETCH_A_LIST,
  payload: api.fetchAList(id)
})