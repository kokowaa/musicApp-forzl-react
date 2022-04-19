import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

const ThemeHeaderRcm = memo((props) => {
  // props 解构赋值设置默认值 也可通过propTypes库进行校验
  const { title, keywords = [] } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="#/">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="#/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRcm.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
ThemeHeaderRcm.defaultProps = {
  keywords: []
}

export default ThemeHeaderRcm;