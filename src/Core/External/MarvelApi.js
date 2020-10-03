import Axios from 'axios'

const baseURL = 'https://gateway.marvel.com:443/v1/public/'

export const marvelApi = Axios.create(
  {
    baseURL,
    params: { apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY }
  }
)

marvelApi.interceptors.response.use((response) => {
  const { data: { data } = {} } = response
  if (data) {
    return data
  }
  return response
})
