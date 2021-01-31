export interface Theme {
  background: string;
  text: string;
}

export const light: Theme = {
  background: '#f1f1f1',
  text: '#000'
};

export const dark: Theme = {
  background: '#101010',
  text: '#fff'
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
