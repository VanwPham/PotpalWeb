import Api from './Api'

export default {
  async register(credentials) {
    // return await Api().post('/auth/signup', credentials)
    return await Api().post('/user', credentials)
  },

  async login(credentials) {
    // return await Api().post('/auth/login', credentials)
    return await Api().post('/user', credentials)
  },
}
