import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Layout, SectionTitle } from '../../components';
import { apolloClient } from '../../lib';
import { toPaths } from '../../utils';
import { IPost } from '../../types';

interface Props {
  post: IPost;
}

const POSTS_QUERY = gql`
  query Posts {
    posts {
      slug
    }
  }
`;

const POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    postBySlug(slug: $slug) {
      title
      description
      markdown
      readTime
      createdAt
    }
  }
`;

const PostContainer = styled.article`
  box-sizing: border-box;
  display: block;
  line-height: 1.6;
  text-align: center;
`;

const PostTitle = styled(SectionTitle)`
  color: ${props => props.theme.green};
  font-size: 2.5rem;
`;

const PostInfo = styled.p`
  font-size: 0.75rem;
`;

const PostContent = styled.div``;

const Post = (props: Props) => {
  const { post } = props;

  const createdAt = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(post.createdAt));

  return (
    <Layout>
      <Head>
        <title>Gabriel Alcântara • {post.title}</title>
      </Head>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
          ☕️ {post.readTime} mins de leitura • {createdAt}
        </PostInfo>
        <PostContent>{post.markdown}</PostContent>
      </PostContainer>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: POSTS_QUERY
  });

  const paths = toPaths<IPost>(data.posts, 'slug');

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: POST_BY_SLUG,
    variables: {
      slug: params.slug
    }
  });

  return {
    props: {
      post: data.postBySlug
    }
  };
};

export default Post;
