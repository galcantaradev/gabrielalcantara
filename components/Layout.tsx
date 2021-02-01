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

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 42rem;
`;

export const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Gabriel Alcântara</title>
      </Head>
      <Content>
        <NavBar />
        {props.children}
      </Content>
    </Container>
  );
};
