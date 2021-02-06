import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { apolloClient } from '../../lib';
import { Layout, PostItem } from '../../components';
import { IPost } from '../../types';

interface Props {
  posts: IPost[];
}

const POSTS_QUERY = gql`
  query Posts {
    posts {
      slug
      title
      description
      readTime
      createdAt
      tags {
        name
        slug
      }
    }
  }
`;

const Posts = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Gabriel Alcântara • Publicações</title>
      </Head>
      {props.posts.map((post: IPost, index: number) => (
        <PostItem key={`${post.id}_${index}`} post={post} />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: POSTS_QUERY
  });

  return {
    props: {
      posts: data.posts
    }
  };
};

export default Posts;
