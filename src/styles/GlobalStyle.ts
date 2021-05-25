import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body
    {
        display: block;
        margin: 0;
        padding: 0;
        
        color: ${props => props.theme.color.text};
        font-size: 14px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        
        background-color: ${props => props.theme.color.background};
    }
    
    button
    {
        padding: 0;
        margin: 0;
        
        text-decoration: none;
    
        border: none;
        outline: none;
        
        background-color: transparent;
        
        cursor: pointer;
        user-select: none;
    }
    
    a
    {
        color: ${props => props.theme.color.primary.normal};
    }
    
    /* width */
    ::-webkit-scrollbar
    {
        height: 7px;
        width: 7px;
        margin: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track
    {
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb
    {
        background: ${props => props.theme.color.primary.normal};
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover
    {
        background: ${props => props.theme.color.primary.dark};
    }
`;
 
export default GlobalStyle;