import api from './api'

export default {
  fetchLists() {
    return api().get('lists')
      .then(res => res.data)
      // handle server error
      .catch(err => [])
  },

  fetchList(id) {
    return api().get(`lists/${id}`)
      .then(res => res.data)
      // handle server erro
      .catch(err => {})   
  }
}