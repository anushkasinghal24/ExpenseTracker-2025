import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --font-primary: 'Montserrat', sans-serif;
        --font-secondary: 'Open Sans', sans-serif;
        --color-white: #fff;
        --color-dark: #333;
        --color-grey: #afafaf;
        --color-light: #f9f9f9;
        --shadow: 0 1px 4px rgba(0, 0, 0, .1);
    }  f
    
    body {
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400; /* Replace <weight> with actual value */
        font-style: normal;
        
`;

export default GlobalStyle;
