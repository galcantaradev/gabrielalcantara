import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { NavBar } from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Content = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  width: 42rem;
`;

export const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Gabriel Alcântara</title>
      </Head>
      <NavBar />
      <Content>{props.children}</Content>
    </Container>
  );
};
