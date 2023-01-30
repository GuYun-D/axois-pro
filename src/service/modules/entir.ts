import { abiy } from '..'

abiy.request({
  url: "/entire/list",
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log("请求一", res);
})


abiy.request({
  url: "/home/highscore",
  interceptors: {
    requestSuccess: (config) => {
      console.log("请求二单独的请求成功的拦截");
      return config
    },
    responseSuccess: (res) => {
      console.log('请求二单独的响应成功的拦截');
      return res
    }
  }
}).then(res => {
  console.log("请求二", res);
})