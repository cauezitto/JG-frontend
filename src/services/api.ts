import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_HOST || 'localhost:1337'
})

export default api
