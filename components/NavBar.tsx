import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styled from 'styled-components';

import {
  faGithub,
  faLinkedinIn,
  faStackOverflow,
  faTwitter
} from '../icons/Icons';

const NavContainer = styled.nav`
  align-items: space-between;
  display: flex;
  padding: 1rem 0 1rem 0;

  #routes {
    display: inherit;

    a {
      margin-right: 1rem;
    }
  }

  #links {
    display: inherit;
    margin-left: auto;

    a {
      margin-left: 1rem;
    }
  }
`;

export const NavBar = () => {
  return (
    <NavContainer>
      <div id="routes">
        <Link href="/">Início</Link>
        <Link href="/posts">Publicações</Link>
        <Link href="/projects">Projetos</Link>
      </div>
      <div id="links">
        <a href="https://github.com/galcantaradev" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-alc%C3%A2ntara-4b7890120/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a
          href="https://stackoverflow.com/users/14178125/gabriel-alc%c3%a2ntara"
          target="_blank"
        >
          <FontAwesomeIcon icon={faStackOverflow} size="lg" />
        </a>
        <a href="https://twitter.com/galcantaradev" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </div>
    </NavContainer>
  );
};
