import { gql } from '@apollo/client';
import { Fragment } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { apolloClient } from '../../lib';
import { Layout } from '../../components';
import { IPost } from '../../types';

interface Props {
  posts: IPost[];
}

const POSTS_QUERY = gql`
  query Posts {
    posts {
      id
      title
      description
      updoot
      readTime
      createdAt
      updatedAt
    }
  }
`;

const Posts = (props: Props) => {
  const router = useRouter();

  return (
    <Layout>
      {props.posts.map(post => {
        return (
          <Fragment key={post.id}>
            <h3 onClick={() => router.push(`/posts/${post.id}`)}>
              {post.title}
            </h3>
            <small>{post.description}</small>
          </Fragment>
        );
      })}
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
