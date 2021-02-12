import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { FormattedDate, Layout, SectionTitle } from '../../components';
import { getPostData, getPostsIds } from '../../lib';
import { IPost, IPostInfo } from '../../types';

interface Props {
  post: IPost;
}

const Container = styled.article`
  box-sizing: border-box;
  display: block;
`;

const Header = styled.div`
  text-align: center;
`;

const Title = styled(SectionTitle)`
  color: ${props => props.theme.green};
  font-size: 2rem;
`;

const Info = styled.p<IPostInfo>`
  font-size: ${props => (props.size === 'small' ? '0.75rem' : '')};
  margin: 0;
`;

const Content = styled.div`
  margin-top: 3rem;

  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const Post = (props: Props) => {
  const { post } = props;

  return (
    <Layout>
      <Head>
        <title>{post.title} • Gabriel Alcântara</title>
      </Head>
      <Container>
        <Header>
          <Title>{post.title}</Title>
          <Info size="small">
            ☕️ {post.readTime} min de leitura •{' '}
            <FormattedDate value={post.createdAt} />
          </Info>
          <Info size="normal">{post.description}</Info>
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsIds();

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params.id as string);

  return {
    props: {
      post
    }
  };
};

export default Post;
