import { useRouter } from 'next/router';
import styled from 'styled-components';

import { SectionTitle } from './SectionTitle';
import { IPost } from '../types';
import { formattedTags } from '../utils';

interface Props {
  post: IPost;
}

const Article = styled.article`
  margin-bottom: 3rem;

  p {
    margin: 0;
  }

  h1 {
    color: ${props => props.theme.green};
    margin-bottom: 0.5rem;
    width: fit-content;

    :hover {
      cursor: pointer;
    }
  }
`;

export const PostItem = (props: Props) => {
  const { post } = props;
  const router = useRouter();

  const createdAt = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(post.createdAt));

  return (
    <Article>
      <SectionTitle onClick={() => router.push(`/posts/${post.slug}`)}>
        {post.title}
      </SectionTitle>
      <small>
        ☕️ {post.readTime} mins de leitura • {createdAt}
      </small>
      <p>{post.description}</p>
      <small>{formattedTags(post.tags)}</small>
    </Article>
  );
};