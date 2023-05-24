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
    border:3px solid #23d997;
    background:transparent;
    padding:1rem 2rem;
    transition: all 250ms ease;
    &:hover{
        background: #23d997;
    }
}

h2{
    font-size:4rem;
    font-weight:lighter;

}
h3{
    color:white;

}
h4{
    font-weight:bold;
    
}
span{
    font-weight:bold;
    color:#23d997;
}
p{
    padding:3rem 0;
    color:#ccc;
    font-size:1.4rem;
    line-height:150%;
}
a{
    font-size:1.1rem;
}

`;
