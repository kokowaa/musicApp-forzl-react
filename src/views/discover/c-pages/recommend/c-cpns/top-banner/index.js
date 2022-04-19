import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Carousel } from 'antd';

import { getTopBannerAction } from '../../store/actionCreators';
import { BannerWrapper, BannerRight, BannerLeft, BannerControl } from './style';
import { useCallback } from 'react';

const TopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 组件和redux进行关联：1.获取数据 2.操作数据
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch();

  // Hooks
  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const imageChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他业务逻辑
  const currentImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + '?imageView&blur=40x20')

  return (
    <BannerWrapper bgImage={currentImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={imageChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner