import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,:after,:before {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    body,html {
        height: 100%;
        background-color: #fffefc;
        font-size: 62.5%;
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Pretendard', sans-serif;
        line-height: 1.5;
    }

`;

export default GlobalStyle;
