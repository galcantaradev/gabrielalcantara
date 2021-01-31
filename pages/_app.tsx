import '../icons/Library';
import '../styles/globals.css';

import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks';
import { GlobalStyle } from '../theme';

const App = ({ Component, pageProps }) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
