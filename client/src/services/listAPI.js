import api from './api'

const fetchLists = () =>
  api().get('lists')
    .then(res => res.data)
    // handle server error
    .catch(err => [])

const fetchAList = id =>
  api().get(`lists/${id}`)
  .then(res => res.data)
  // handle server erro
  .catch(err => {})   

export { fetchLists, fetchAList }