import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    box-sizing: border-box;
    color: ${props => props.theme.text};
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    margin: 0;
    padding: 0;
    width: 100vw;

    a:focus {
      outline: none;
    }
  }

  a, svg {
    color: inherit;
    text-decoration: none;
    transition: ease color 300ms;

    :hover {
      cursor: pointer;
    }
  }
`;
