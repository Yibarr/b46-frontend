import axios from 'axios'

const instance = axios.create(
  {
    // baseURL: "https://cinta-negra-b46.herokuapp.com/api/v1/"
    baseURL: "http://localhost:4000/api/v1/"
  }
)
export const setAuthToken = token => {
  if (token) {
    instance.defaults.headers.Authorization = `Bearer ${token}`
  } else {
    delete instance.defaults.headers.common['Authorization']
  }
}

export const auth = {
  signup: body => instance.post('/signup', body),
  login: body => instance.post('/login', body),
}

export const users = {
  findOne: id =>  instance.get(`/users/${id}`),
}

export const posts = {
  create: body => instance.post('/posts', body)
}
