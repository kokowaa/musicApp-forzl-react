import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom'

import Discover from '@/views/discover'
import Recommend from '@/views/discover/c-pages/recommend';
// import Ranking from '@/views/discover/c-pages/ranking'
// import NotFound from '@/views/not-found'
// import SAttention from '@/views/attention'
// import SDownload from '@/views/download'
// import SMine from '@/views/mine'
// import SMusician from '@/views/musician'
// import SShop from '@/views/shop'

// 路由懒加载
// const NotFound = lazy(() => import('@/views/not-found'));
// const SAttention = lazy(() => import('@/views/attention'));
// const SDownload = lazy(() => import('@/views/download'));
// const SMine = lazy(() => import('@/views/mine'));
// const SMusician = lazy(() => import('@/views/musician'));
// const SShop = lazy(() => import('@/views/shop'))

// // discover内部页面
// const Album = lazy(() => import('@/views/discover/c-pages/album'));
// const Artist = lazy(() => import('@/views/discover/c-pages/artist'));
// const Djradio = lazy(() => import('@/views/discover/c-pages/djradio'));
// const Ranking = lazy(() => import('@/views/discover/c-pages/ranking'));
// const Songs = lazy(() => import('@/views/discover/c-pages/songs'));


// 路由懒加载函数的封装
const LazyLoad = (path, num) => {
  let Cpn;
  if (num === 0) {
    Cpn = lazy(() => import(`@/views/${path}`));
  } else if (num === 1) {
    Cpn = lazy(() => import(`@/views/discover/c-pages/${path}`));
  }
  return (
    <Suspense fallback={<>加载中...</>}>
      <Cpn />
    </Suspense>
  );
};

const routes = [
  {
    path: '/',
    element: <Navigate to='/discover' />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        index: true,
        element: <Navigate to='/discover/recommend' />
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'ranking',
        element: LazyLoad('ranking', 1)
      },
      {
        path: 'songs',
        element: LazyLoad('songs', 1)
      },
      {
        path: 'djradio',
        element: LazyLoad('djradio', 1)
      },
      {
        path: 'artist',
        element: LazyLoad('artist', 1)
      },
      {
        path: 'album',
        element: LazyLoad('album', 1)
      }
    ]
  },
  {
    path: 'mine',
    element: LazyLoad('mine', 0)
  },
  {
    path: 'attention',
    element: LazyLoad('attention', 0)
  },
  {
    path: 'shop',
    element: LazyLoad('shop', 0)
  },
  {
    path: 'musician',
    element: LazyLoad('musician', 0)
  },
  {
    path: 'download',
    element: LazyLoad('download', 0)
  },
  {
    path: '*',
    element: LazyLoad('not-found', 0)
  }
]


export default routes;