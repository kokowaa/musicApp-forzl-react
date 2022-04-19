import React, { memo } from 'react';

import { NewAlbumWrapper } from './style';
import ThemeHeaderRcm from '@/components/theme-header-rcm';

const NewAlbum = memo(() => {
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title='新碟上架' />
    </NewAlbumWrapper>
  )
})

export default NewAlbum