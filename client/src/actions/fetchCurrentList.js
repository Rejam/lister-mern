import { FETCH_A_LIST } from '../actions/types'
import { apiFetchAList } from '../services/listAPI'

export const fetchCurrentList = new_id => ({
  type: FETCH_A_LIST,
  payload: apiFetchAList(new_id)
})

