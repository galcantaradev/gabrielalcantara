import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  h1 {
    font-size: 5rem;
    margin: 0;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Head>
        <title>Página não encontrada • Gabriel Alcântara</title>
      </Head>

      <h1>404</h1>
      <h2>Página não encontrada.</h2>
      <Link href="/">Volte para o início</Link>
    </Container>
  );
};

export default NotFound;
