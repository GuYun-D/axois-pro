import { Request } from './request'
import { BASE_URL, TIME_OUT } from './config'

const api = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

const abiy = new Request({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 3000,
  interceptors: {
    requestSuccess: (config) => {
      console.log("爱彼迎请求成功的拦截器");
      return config
    },
    requestFail: (err) => {
      console.log("爱彼迎请求失败的拦截器");
      return err
    },
    responseSuccess: (res) => {
      console.log("爱彼迎响应成功的拦截器");
      return res
    },

    responseFail: (error) => {
      console.log("爱彼迎响应失败的拦截器");
      return error
    }
  }
})

export { abiy }
export default api