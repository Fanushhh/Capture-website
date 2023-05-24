import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing;border-box;
}
body{
    background-color:#1b1b1b;
    color:white;    
}

button{
    font-weight:bold;
    font-size:1.1rem;
    color:white;
    cursor:pointer;
    border:3px solid green;
    background:transparent;
    padding:1rem 2rem;
    transition: all 250ms ease;
    &:hover{
        background: green;
    }
}

`;
