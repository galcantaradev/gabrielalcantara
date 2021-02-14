import { render, screen } from '@testing-library/react';

import { PostItem } from '../PostItem';
import { IPost } from '../../types';

const post: IPost = {
  id: '1',
  title: 'Post Title',
  description: 'Post Description',
  readTime: 0,
  markdown: 'Post Markdown',
  tags: ['react', 'jest', 'react testing library'],
  createdAt: '2021-01-01'
};

describe('PostItem.test.tsx', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<PostItem post={post} />);

    expect(screen.getByText('Post Title')).toBeInTheDocument();
    expect(screen.getByText('Post Description')).toBeInTheDocument();
    expect(
      screen.getByText('☕️ 0 min de leitura • 01/01/2021')
    ).toBeInTheDocument();
    expect(
      screen.getByText('🏷 react, jest, react testing library')
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('read time should be singular', () => {
    render(<PostItem post={post} />);

    expect(
      screen.getByText('☕️ 0 min de leitura • 01/01/2021')
    ).toBeInTheDocument();
  });

  it('read time should be plural', () => {
    render(<PostItem post={{ ...post, readTime: 2 }} />);

    expect(
      screen.getByText('☕️ 2 mins de leitura • 01/01/2021')
    ).toBeInTheDocument();
  });
});
