import { FETCH_BEGIN, FETCH_SUCCESS, FETCH_FAILURE } from './types'

const fetchBegin = () => (
  {
    type: FETCH_BEGIN
  }
)

const fetchSuccess = payload => (
  {
    type: FETCH_SUCCESS,
    payload
  }
)

const fetchFailure = error => (
  {
    type: FETCH_FAILURE,
    error
  }
)

const fetchLists = () => dispatch => {
  dispatch(fetchBegin())
  return fetch('/lists')
    .then(res => res.json())
    .then(lists => {
      // restructure data for store
      const byId = lists.reduce((obj, list) =>
        ({...obj, [list._id]: list}), {})
      const allIds = lists.map(l => l._id)
      dispatch(fetchSuccess({
        allIds,
        byId
      }))
    })

    // dispatch fetch failure action
    .catch(() => dispatch(fetchFailure('Unable to fetch data')))
}

export { fetchLists }



