import axios from 'axios'
import Config from 'react-native-config'

const create = () => {

  axios.defaults.headers.common['X-Auth-Token'] = Config.API_KEY
  axios.defaults.baseURL = Config.ENDPOINT

  const getCompetitions = () => {
    return new Promise((resolve, reject) => {
      axios.get('/v1/competitions')
        .then((response) => {
          resolve({
            ok: true,
            status: response.status,
            data: response.data,
          })
        })
        .catch((error) => {
          resolve({
            ok: false,
            status: error.response.status,
            data: error.response.data,
          })
        })
    })
  }

  return {
    getCompetitions,
  }
}

export default {
  create
}
