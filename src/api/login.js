import request from '@/utils/request.js'

export const getLogin = (params) => {
  return request({
    url: '/login',
    method: 'post',
    params
  })
}