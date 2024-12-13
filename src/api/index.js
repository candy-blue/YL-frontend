import request from '@/utils/request'

/**
 * 获取一言
 * @param params
 * @param.c 句子类型
 * @param.encode 返回编码
 * @param.max_length 最大长度
 * @param.min_length 最小长度
 * @returns {*}
 */
export const GetHitokoto = (params) => {
  return request({
    url: 'https://v1.hitokoto.cn/',
    method: 'post',
    params
  })
}