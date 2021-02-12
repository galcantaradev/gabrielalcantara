import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout, SectionTitle } from '../components';
import { IProject } from '../types';

interface Props {
  projects: IProject[];
}

const Portfolio = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Gabriel Alcântara • Projetos</title>
      </Head>
      <SectionTitle>🛠 Em construção</SectionTitle>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: []
    }
  };
};

export default Portfolio;
