import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import remark from 'remark';
import html from 'remark-html';
import styled from 'styled-components';

import { Layout, SectionTitle } from '../../components';
import { apolloClient } from '../../lib';
import { IPost } from '../../types';

interface Props {
  post: IPost;
}

interface IPostInfo {
  size: 'small' | 'normal';
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
`;

const PostHeader = styled.div`
  text-align: center;
`;

const PostTitle = styled(SectionTitle)`
  color: ${props => props.theme.green};
  font-size: 2rem;
`;

const PostInfo = styled.p<IPostInfo>`
  font-size: ${props => (props.size === 'small' ? '0.75rem' : '')};
  margin: 0;
`;

const PostContent = styled.div`
  margin-top: 2rem;
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
        <PostHeader>
          <PostTitle>{post.title}</PostTitle>
          <PostInfo size="small">
            ☕️ {post.readTime} min de leitura • {createdAt}
          </PostInfo>
          <PostInfo size="normal">{post.description}</PostInfo>
        </PostHeader>
        <PostContent dangerouslySetInnerHTML={{ __html: post.markdown }} />
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

  const processedMarkdown = await remark()
    .use(html)
    .process(data.post.markdown);
  const markdown = processedMarkdown.toString();

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
