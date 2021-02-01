import { ReactNode } from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  children: ReactNode;
}

const StyledSectionTitle = styled.h2``;

export const SectionTitle = (props: SectionTitleProps) => {
  return <StyledSectionTitle>{props.children}</StyledSectionTitle>;
};
