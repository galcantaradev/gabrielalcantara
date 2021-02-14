import { render, screen } from '@testing-library/react';

import { NavBar } from '../NavBar';

describe('NavBar.test.tsx', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<NavBar />);

    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Portfólio')).toBeInTheDocument();
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('stackoverflow-icon')).toBeInTheDocument();
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
