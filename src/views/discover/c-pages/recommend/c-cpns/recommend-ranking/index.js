import React, { memo } from 'react';

import { RecommendRankingWrapper } from './style';
import ThemeHeaderRcm from '@/components/theme-header-rcm';

const RecommendRanking = memo(() => {
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title="榜单" />
    </RecommendRankingWrapper>
  )
})

export default RecommendRanking