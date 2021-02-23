import { render, screen } from '@testing-library/react';

import { ProjectItem } from '../ProjectItem';
import { IProject } from '../../types';

const project: IProject = {
  name: 'Project Name',
  imagePath: '',
  link: ''
};

describe('ProjectItem.test.tsx', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProjectItem project={project} />);

    expect(screen.getByText('Project Name')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
