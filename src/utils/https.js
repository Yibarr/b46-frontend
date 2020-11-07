import axios from 'axios'

const instance = axios.create(
  {
    baseURL: "https://cinta-negra-b46.herokuapp.com/api/v1/"
  }
)

export const auth = {
  signup: body => instance.post('/signup', body)
}