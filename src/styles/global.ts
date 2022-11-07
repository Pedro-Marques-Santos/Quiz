import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --yellow: rgba(249, 168, 38, 0.85);
        --yellow-hover: rgba(249, 168, 38, 1);
        --red1: #EA8282;
        --green: #60BF88;
        --darkblue: #1D355D;
        --blue: #2F527B;
        --lightblue: rgba(96, 102, 208, 0.8);
        --lightergreen: #6FCF97;
        --light1: #FFFFFF;
        --light2: #F2F2F2;
        --red2: rgba(249, 91, 38, 0.85);
        --red2-hover: rgba(249, 91, 38, 1);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    body {
        font-family: 'Poppins';
        font-weight: 500;
    }

`