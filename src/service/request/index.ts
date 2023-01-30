
import type { AxiosInstance, } from 'axios'
import type { GyAxiosRequestConfig } from './type'
import axios from 'axios'

export class Request {
  instance: AxiosInstance

  constructor(config: GyAxiosRequestConfig) {
    this.instance = axios.create(config)
    // 全局请求相应拦截器封装
    this.instance.interceptors.request.use((config) => {
      console.log("全局请求成功的请求拦截器");

      return config
    }, (err) => {
      console.log("全局失败的请求拦截器");

      return err
    })

    this.instance.interceptors.response.use((response) => {
      console.log("全局请求成功的响应拦截器");
      return response.data
    }, (err) => {
      console.log("全局请求失败的响应拦截器");
      return err
    })

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccess,
      config.interceptors?.requestFail
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccess,
      config.interceptors?.responseFail
    )
  }

  request<T = any>(config: GyAxiosRequestConfig<T>) {
    if (config.interceptors?.requestSuccess) {
      config = config.interceptors.requestSuccess(config)
    }
    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
        if (config.interceptors?.responseSuccess) {
          res = config.interceptors.responseSuccess(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get<T = any>(config: GyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: GyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: GyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }

  put<T = any>(config: GyAxiosRequestConfig<T>) {
    return this.request({ ...config, method: 'PUT' })
  }
}
