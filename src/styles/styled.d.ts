import { DefaultTheme } from "styled-components";

interface Color
{
    light : string,
    normal : string,
    dark : string
}

declare module "styled-components"
{
    export interface DefaultTheme
    {
        color : 
        {
            primary : Color,
            secondary: Color,
            background : string,
            text : string
            
        }
    }
}