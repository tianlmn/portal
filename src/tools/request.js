import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:8080',
})

export default instance
