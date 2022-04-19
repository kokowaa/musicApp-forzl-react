import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import { DiscoverWrapper, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data'
import { Outlet } from 'react-router-dom';

const Discover = memo(() => {
  // useEffect(() => {
  //   request({
  //     url: '/banner'
  //   }).then((res) => {
  //     console.log(res);
  //   })
  // }, [])

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})

export default Discover