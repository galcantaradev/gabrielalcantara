export interface Theme {
  background: string;
  text: string;
  green: string;
}

export const light: Theme = {
  background: '#f9fafb',
  text: '#000',
  green: '#00A170'
};

export const dark: Theme = {
  background: '#0d1117',
  text: '#fff',
  green: '#00A170'
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
