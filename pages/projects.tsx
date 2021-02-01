import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';
import { Layout, SectionTitle } from '../components';
import { apolloClient } from '../lib';
import { Project } from '../types';

interface Props {
  projects: Project[];
}

const PROJECTS_QUERY = gql`
  query Projects {
    projects {
      id
      name
      description
      imageUri
      link
      createdAt
      updatedAt
    }
  }
`;

const Projects = (props: Props) => {
  return (
    <Layout>
      <SectionTitle>Projetos</SectionTitle>
      {props.projects.length > 0 ? (
        props.projects.map(project => {
          return (
            <Fragment>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Fragment>
          );
        })
      ) : (
        <h3>Ainda não há projetos publicados.</h3>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: PROJECTS_QUERY
  });

  return {
    props: {
      projects: data.projects
    }
  };
};

export default Projects;
