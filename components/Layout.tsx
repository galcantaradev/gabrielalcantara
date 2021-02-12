import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { NavBar } from './NavBar';
import { SectionTitle } from './SectionTitle';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Content = styled.main`
  align-items: space-between;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;

  ${SectionTitle} {
    margin: 0;
  }
`;

export const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Gabriel Alcântara</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Gabriel Alcântara" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <NavBar />
      <Content>{props.children}</Content>
    </Container>
  );
};
