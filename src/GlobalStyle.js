import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  scroll-behavior: smooth;
}
body {
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
  Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-weight: 300;
  font-size: 16px;
  margin: 0;
  padding: 0;
  background-color: #F2D7EE;
}
a {
  text-decoration: none;
  color: #F2f2f2;
  font-weight: bold;
}

img {
  max-width: 100%;
}
`;
