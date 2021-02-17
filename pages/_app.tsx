import '../icons/Library';
import '../styles/globals.css';

import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '../hooks';
import { GlobalStyle } from '../theme';

const App = ({ Component, pageProps }) => {
  const { theme, isDark } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Gabriel Alcântara</title>

        <link
          rel="shortcut icon"
          href={isDark ? '/dark_favicon.ico' : 'light_favicon.ico'}
        />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Gabriel Alcântara" />
        <meta name="description" content="Site pessoal, blog e portfólio." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielalcantara.com.br/" />
        <meta property="og:title" content="Gabriel Alcântara" />
        <meta
          property="og:description"
          content="Site pessoal, blog e portfólio."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/70175175?s=400&u=fe4c08b6d401b392cc7117fe7ffce0f4f1f695e4&v=4"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gabrielalcantara.com.br/"
        />
        <meta property="twitter:title" content="Gabriel Alcântara" />
        <meta
          property="twitter:description"
          content="Site pessoal, blog e portfólio."
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/70175175?s=400&u=fe4c08b6d401b392cc7117fe7ffce0f4f1f695e4&v=4"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
