import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import { Fragment } from 'react';

import { Layout } from '../components';
import { apolloClient } from '../lib';
import { IProject } from '../types';

interface Props {
  projects: IProject[];
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
      {props.projects.map(project => {
        return (
          <Fragment key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </Fragment>
        );
      })}
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
