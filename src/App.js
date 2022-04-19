import React, { memo, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@/assets/css/reset.css'
import routes from '@/router'
import store from './store'
import SHeader from '@/components/app-header'
import SFooter from '@/components/app-footer'

const App = memo(() => {
  const element = useRoutes(routes);

  return (
    <Provider store={store}>
      <SHeader />
      <Suspense>
        {element}
      </Suspense>
      <SFooter />
    </Provider>
  )
})

export default App