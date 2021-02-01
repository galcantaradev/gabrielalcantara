import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = (props: SectionTitleProps) => {
  return <h2>{props.children}</h2>;
};
