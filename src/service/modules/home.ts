import api from '..'


interface IHome {
  success: boolean,
  data: any,
  statusCode: number
}

export const textAxios = () => {
  return api.request<IHome>({
    url: "/home/multidata",
  }).then(res => {
      console.log(res.statusCode);
  })
}

textAxios()

