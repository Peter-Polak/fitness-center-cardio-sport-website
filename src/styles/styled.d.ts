import { DefaultTheme } from "styled-components";

interface Color
{
    ligth : string,
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
            secondary : Color,
            succes : Color,
            warning : Color,
            background : string,
            text : string
            
        }
    }
}