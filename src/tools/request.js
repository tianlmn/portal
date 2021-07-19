import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:9999/api',
})

export default instance
