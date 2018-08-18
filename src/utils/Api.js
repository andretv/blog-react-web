// import axios from 'axios'

class Api {
  constructor() {
    this.baseUrl = 'http://api'

    this.fetchNewToken = debounce(this.fetchNewToken, 1000)
  }

  setToken = token => {
    localStorage.setItem('blog-token', token)
  }

  getToken = () => localStorage.getItem('blog-token')

  fetchNewToken = token => {
    this.call('/refresh-token', 'post', token)
  }

  call = (path, method, payload) => {

  }
}

export default new Api()