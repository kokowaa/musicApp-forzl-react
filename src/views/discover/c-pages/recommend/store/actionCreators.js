import * as actionType from './constant';

import { getTopBanners, getHotRecommends } from '@/services/recommend';

const changeBannerAction = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeBannerAction(res))
    })
  }
}

const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends().then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}