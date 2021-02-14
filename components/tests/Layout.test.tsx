import { render } from '@testing-library/react';

import { Layout } from '../Layout';

describe('Layout.test.tsx', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Layout>Children</Layout>);

    expect(asFragment).toMatchSnapshot();
  });
});
