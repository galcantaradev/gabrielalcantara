import { ReactNode } from 'react';
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
      <NavBar />
      <Content>{props.children}</Content>
    </Container>
  );
};
