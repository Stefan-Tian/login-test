import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Login from '../pages/login';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const theme = {
  color: {
    main: '#38b5ed',
    mainDark: '#0DB3F1',
    mainLight: '#a3ecff',
    dark: '#606674',
    grey: '#e2e2e2',
    greyDark: '#bcbcbc',
    greyDarkExtreme: '#ababab',
    error: '#e57373',
  },
};

export default () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Login />
  </ThemeProvider>
);
