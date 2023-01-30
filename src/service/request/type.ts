import type { AxiosRequestConfig, AxiosResponse } from "axios";


interface GyInterceptor<T = AxiosResponse> {
  requestSuccess?: (config: AxiosRequestConfig) => AxiosRequestConfig,
  requestFail?: (error: any) => any,
  responseSuccess?: (response: T) => T,
  responseFail?: (error: any) => any,
}

export interface GyAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: GyInterceptor<T>
}