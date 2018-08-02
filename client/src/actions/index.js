import { FETCH_LISTS, FETCH_A_LIST } from './types'
import { apiFetchLists, apiFetchAList } from '../services/listAPI'

export const fetchAllLists = () => ({
  type: FETCH_LISTS,
  payload: apiFetchLists()
})

export const fetchCurrentList = id => ({
  type: FETCH_A_LIST,
  payload: apiFetchAList(id)
})

