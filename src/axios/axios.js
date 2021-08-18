import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-25d84.firebaseio.com/'
})