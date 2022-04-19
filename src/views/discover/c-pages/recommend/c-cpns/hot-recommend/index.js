import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HotRecommendWrapper } from './style';
import ThemeHeaderRcm from '@/components/theme-header-rcm';
import SongsCover from '@/components/songs-cover';
import { getHotRecommendAction } from '../../store/actionCreators';


const HotRecommend = memo(() => {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])


  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title='热门推荐' keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <SongsCover info={item} key={item.id}></SongsCover>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend