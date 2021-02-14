import { render, screen } from '@testing-library/react';

import { FormattedDate } from '../FormattedDate';

describe('FormattedDate.test.tsx', () => {
  it('should render formatted date', () => {
    const { asFragment } = render(<FormattedDate value="2021-01-01" />);

    expect(screen.getByText('01/01/2021')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
