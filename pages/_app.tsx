import '../icons/Library';
import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { apolloClient } from '../lib';
import { useTheme } from '../hooks';
import { GlobalStyle } from '../theme';

const App = ({ Component, pageProps }) => {
  const { theme } = useTheme();

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
