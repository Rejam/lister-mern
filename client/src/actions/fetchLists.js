import { FETCH_LISTS } from './types'
import { apiFetchLists } from '../services/listAPI'

export const fetchAllLists = () => ({
  type: FETCH_LISTS,
  payload: apiFetchLists()
})