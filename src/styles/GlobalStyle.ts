import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,:after,:before {
        box-sizing: border-box;
        position: relative;
        z-index: 0;
    }
    * {
        margin: 0;
    }
    body,html, #root {
        height: 100%;
        width: 100%;
        font-size: 62.5%;

    }
    body {
        line-height: 1.5;
    }

`;

export default GlobalStyle;
