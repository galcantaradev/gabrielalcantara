import { GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Layout, ProjectItem } from '../components';
import { projects } from '../lib';
import { IProject } from '../types';

interface Props {
  projects: IProject[];
}

const Container = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 672px) {
    justify-content: center;
  }
`;

const Portfolio = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Gabriel Alcântara • Portfólio</title>
      </Head>
      <Container>
        {props.projects.map((project: IProject) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects
    }
  };
};

export default Portfolio;
