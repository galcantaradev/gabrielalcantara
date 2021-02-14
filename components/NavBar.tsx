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

    @media only screen and (max-width: 375px) {
      display: flex;
      flex-direction: column;
      margin: 1rem 1rem;
      position: absolute;
      right: 0;
      top: 0;

      a {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export const NavBar = () => {
  return (
    <NavContainer>
      <div id="routes">
        <Link href="/">Início</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfólio</Link>
      </div>
      <div id="links">
        <a
          href="https://github.com/galcantaradev"
          target="_blank"
          rel="noopener"
          data-testid="github-icon"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" height="21" width="21" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-alc%C3%A2ntara-4b7890120/"
          target="_blank"
          rel="noopener"
          data-testid="linkedin-icon"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="lg"
            height="21"
            width="21"
          />
        </a>
        <a
          href="https://stackoverflow.com/users/14178125/gabriel-alc%c3%a2ntara"
          target="_blank"
          rel="noopener"
          data-testid="stackoverflow-icon"
          aria-label="Stack Overflow"
        >
          <FontAwesomeIcon
            icon={faStackOverflow}
            size="lg"
            height="21"
            width="21"
          />
        </a>
        <a
          href="https://twitter.com/galcantaradev"
          target="_blank"
          rel="noopener"
          data-testid="twitter-icon"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" height="21" width="21" />
        </a>
      </div>
    </NavContainer>
  );
};
