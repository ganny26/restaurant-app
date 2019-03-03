import Axios from 'axios'
export const getData = () => {
  return Axios.get('/me?from=0&to=10')
}

export const getPageData = (from=0,to=10) => {
  return Axios.get(`/me?from=${from}&to=${to}`)
}


export const getSearch = (query) => {
  return Axios.get(`/search?q=${query}&from=0&to=20`)
}


module.export= {
  getData,
  getSearch,
  getPageData
}