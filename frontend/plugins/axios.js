const BASE_API_URL = 'https://jsonplaceholder.typicode.com'

export default function ({ $axios }, inject) {
  const api = $axios.create({
    baseURL: BASE_API_URL,
  })
  api.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })
  api.onError((error) => {
    return error.response
  })
  inject('api', api)
}
