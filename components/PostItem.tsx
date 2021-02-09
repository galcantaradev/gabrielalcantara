import Link from 'next/link';
import styled from 'styled-components';

import { SectionTitle } from './SectionTitle';
import { FormattedDate } from './FormattedDate';
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

  return (
    <Article>
      <Link href={`/posts/${post.id}`}>
        <SectionTitle>{post.title}</SectionTitle>
      </Link>
      <small>
        ☕️ {post.readTime} {post.readTime > 1 ? 'mins' : 'min'} de leitura •{' '}
        <FormattedDate value={post.createdAt} />
      </small>
      <p>{post.description}</p>
      <small>🏷 {formattedTags(post.tags)}</small>
    </Article>
  );
};
