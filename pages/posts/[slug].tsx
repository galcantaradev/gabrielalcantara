import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import styled from 'styled-components';

import { Layout, SectionTitle } from '../../components';
import { apolloClient } from '../../lib';
import { IPost } from '../../types';

interface Props {
  post: IPost;
}

const SLUGS_QUERY = gql`
  query Slugs {
    slugs
  }
`;

const POST_BY_SLUG = gql`
  query PostBySlug($slug: String!) {
    post: postBySlug(slug: $slug) {
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
  text-align: center;
`;

const PostTitle = styled(SectionTitle)`
  color: ${props => props.theme.green};
  font-size: 2.5rem;
`;

const PostInfo = styled.p`
  font-size: 0.75rem;
`;

const PostContent = styled.div`
  line-height: 1.6;
`;

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
        <title>{post.title} • Gabriel Alcântara</title>
      </Head>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
          ☕️ {post.readTime} mins de leitura • {createdAt}
        </PostInfo>
        <PostContent>{hydrate(post.markdown)}</PostContent>
      </PostContainer>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<{ slugs: string[] }>({
    query: SLUGS_QUERY
  });

  const paths = data.slugs.map(slug => {
    return {
      params: {
        slug
      }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<{ post: IPost }>({
    query: POST_BY_SLUG,
    variables: {
      slug: params.slug
    }
  });

  const markdown = await renderToString(data.post.markdown);

  return {
    props: {
      post: {
        ...data.post,
        markdown
      }
    }
  };
};

export default Post;
