import api from './api'

const apiFetchLists = () =>
  api().get('lists')
    .then(res => res.data)
    // handle server error
    .catch(err => [])

const apiFetchAList = id =>
  api().get(`lists/${id}`)
  .then(res => res.data)
  // handle server error
  .catch(err => {})   

export { apiFetchLists, apiFetchAList }