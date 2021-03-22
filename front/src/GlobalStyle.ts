import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow-x:hidden;
font-family: 'Noto Sans KR', sans-serif;
  }
`;
export default GlobalStyle;
