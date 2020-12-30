import '../icons/Library';
import '../styles/globals.css';

import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
