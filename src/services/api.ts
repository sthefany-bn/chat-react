import axios from 'axios'

const api = axios.create({
  baseURL: 'https://secret-chat.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
