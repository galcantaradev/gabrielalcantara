// import { gql } from '@apollo/client';
// import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout, SectionTitle } from '../components';
// import { apolloClient } from '../lib';
import { IProject } from '../types';

interface Props {
  projects: IProject[];
}

// const PROJECTS_QUERY = gql`
//   query Projects {
//     projects {
//       id
//       name
//       description
//       imageUri
//       link
//       createdAt
//       updatedAt
//     }
//   }
// `;

const Projects = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Gabriel Alcântara • Projetos</title>
      </Head>
      <SectionTitle>🛠 Em construção</SectionTitle>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await apolloClient.query({
//     query: PROJECTS_QUERY
//   });

//   return {
//     props: {
//       projects: data.projects
//     }
//   };
// };

export default Projects;
