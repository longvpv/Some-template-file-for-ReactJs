import React, { FunctionComponent } from 'react'
import '../libs/extensions';
import MainLayout from '../layouts/mainLayout';
import withRedux from '../redux/withRedux';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router'
import { NextSeo } from 'next-seo';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'animate.css'

Router.events.on('routeChangeComplete', () => window.scrollTo(0, 0));
Router.events.on('routeChangeError', () => NProgress.done());

const ERPApp: FunctionComponent = (props: any) => {
  const { Component, pageProps, store } = props;
  const AppLayout = Component.Layout || MainLayout;
  const persistor = persistStore(store);

  return (
    <React.Fragment>
      <NextSeo title="ERP Web Application" />
      <Provider store={store}>
        <PersistGate loading={<Component {...pageProps} />} persistor={persistor}>
          <AppLayout {...pageProps}>
            <Component {...pageProps} />
          </AppLayout>
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}

export default withRedux(ERPApp);