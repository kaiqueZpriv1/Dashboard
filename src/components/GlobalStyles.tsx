import { createGlobalStyle } from 'styled-components';
import { Theme } from '../theme';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${Theme.color.background};
        
    }
    h1, h3, button{
        font-family: ${Theme.source.primary};
    }
    p, a, span{
        text-decoration: none;
        font-family: ${Theme.source.secundary};
    }
`;
