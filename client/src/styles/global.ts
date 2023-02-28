import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background-color: rgb(246, 249, 255);

  /* @media (prefers-color-scheme: dark) {
    background-color: black;
  } */
}
`;
