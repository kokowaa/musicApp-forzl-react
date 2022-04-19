/**
 *  将网络请求的代码进一步封装。将代码量进行分割 专属于recommend界面的网络请求
 */
import request from './request';

// 轮播图
export function getTopBanners () {
  return request({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends (limit = 8) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}