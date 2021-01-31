import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  children: ReactNode;
}

const StyledSectionTitle = styled.h2``;

const SectionTitle = (props: SectionTitleProps) => {
  return <StyledSectionTitle>{props.children}</StyledSectionTitle>;
};

export default SectionTitle;
