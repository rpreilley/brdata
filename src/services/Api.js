import axios from 'axios'

import config from '../config.js'
let baseURL = config.baseURL
let restApiTimeout = config.restApiTimeout

axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: baseURL,
  timeout: restApiTimeout,
  withCredentials: false
})

export default () => {
  return instance
}
