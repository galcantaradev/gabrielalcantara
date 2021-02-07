// import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import remark from 'remark';
import html from 'remark-html';
import styled from 'styled-components';

import { Layout, SectionTitle } from '../../components';
// import { apolloClient } from '../../lib';
import { IPost } from '../../types';

interface Props {
  post: IPost;
}

interface IPostInfo {
  size: 'small' | 'normal';
}

// const SLUGS_QUERY = gql`
//   query Slugs {
//     slugs
//   }
// `;

// const POST_BY_SLUG = gql`
//   query PostBySlug($slug: String!) {
//     post: postBySlug(slug: $slug) {
//       title
//       description
//       markdown
//       readTime
//       createdAt
//     }
//   }
// `;

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
  // const { data } = await apolloClient.query<{ slugs: string[] }>({
  //   query: SLUGS_QUERY
  // });

  // const paths = data.slugs.map(slug => {
  //   return {
  //     params: {
  //       slug
  //     }
  //   };
  // });

  return {
    paths: [
      {
        params: {
          slug: 'introducao'
        }
      }
    ],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const { data } = await apolloClient.query<{ post: IPost }>({
  //   query: POST_BY_SLUG,
  //   variables: {
  //     slug: params.slug
  //   }
  // });

  const post = {
    id: '9b7bfa92-65b3-11eb-ae93-0242ac130002',
    slug: 'introducao',
    title: 'Introdução',
    description: 'Introdução e motivações por trás deste blog.',
    readTime: 1,
    createdAt: '2021-01-07'
  };

  const processedMarkdown = await remark()
    .use(html)
    .process(
      'Como desenvolvedor, sempre tive a cisma de não estar preparado por não saber algum tópico a fundo ou como as coisas funcionam por debaixo dos panos, por mais que já tenha estudado.\n\nNo caso de linguagens de programação ou frameworks, por mais que eu já saiba desenvolver e consiga explicar alguns tópicos, se eu não conseguir explicar algo bem, fico com a sensação de que preciso rever os conceitos que estou tentando explicar e me preparar melhor (novamente). Este é um processo que leva um tempo considerável, e sem anotações para consultar, o processo acaba sendo um pouco frustrante.\n\nNunca fui de fazer anotações sobre o que vou aprendendo, e é normal que a gente se esqueça de algumas coisas com o tempo, já que nem tudo é utilizado frequentemente, então o blog será uma maneira de manter o registro de informações relevantes ou que poderão ser consultadas com o passar do tempo, além de crer que isso me tornará um profissional melhor.\n\nE por fim, sempre achei MUITO foda ter pessoas que disseminam conhecimento a fim de uma comunidade melhor. Aprendi muitas coisas graças a isso e sinto que tenho o dever de passar parte do que adquiri para frente, e essa vai ser minha contribuição.\n\nDa comunidade para a comunidade.\n\nEspero que curtam! 👊🏻\n\n## Referências\n\n[Deciding to write a coding blog... Should I? ](https://dev.to/alserembani94/deciding-to-write-a-coding-blog-should-i-5cml?signin=true)'
    );
  const markdown = processedMarkdown.toString();

  return {
    props: {
      post: {
        ...post,
        markdown
      }
    }
  };
};

export default Post;
