import api from './'

const fetch = () => 
  api().get('lists')


export { fetch }