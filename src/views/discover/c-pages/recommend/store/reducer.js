import { Map } from 'immutable';
import * as actionType from './constant';

const defaultState = Map({
  topBanners: [],
  hotRecommends: []
})

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    case actionType.CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends', action.hotRecommends)
    default:
      return state
  }
}

export default reducer;
