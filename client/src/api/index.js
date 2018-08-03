import axios from 'axios'

const api = () => 
  axios.create({ 
    baseURL: "http://localhost:5000"
  })

  /**
 * Fetch all data from the list api
 */
export const fetchData = () => 
  api().get('lists')