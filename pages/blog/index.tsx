import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Layout, PostItem } from '../../components';
import { getPosts } from '../../lib';
import { IPost } from '../../types';

interface Props {
  posts: IPost[];
}

const Blog = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>Gabriel Alcântara • Blog</title>
      </Head>
      {props.posts.map((post: IPost, index: number) => (
        <PostItem key={`${post.id}_${index}`} post={post} />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts
    }
  };
};

export default Blog;
