import { Component } from "react";
import styled from 'styled-components';

interface IHeadingProps
{
    heading : "H1" | "H2" | "H3" | "H4" | "H5" | "H6"
    className? : string
}

interface IHeadingState
{
    
}

class Heading extends Component<IHeadingProps, IHeadingState>
{
    constructor(props : IHeadingProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { heading : Heading, className, children } = this.props;
        
        return (
            Heading === "H1" ? <H1 className={className}>{children}</H1> : <H2 className={className}>{children}</H2>
        );
    }
}

const H1 = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    font-family: "Bebas Neue";
    letter-spacing: 1px;
    font-size: 22px;
    
    color: rgb(58, 58, 58);
    background-color: ${props => props.theme.color.primary.normal};
`;

const H2 = styled.h2`
    display: flex;
    align-items: center;
    
    font-family: "Bebas Neue";
    letter-spacing: 2px;
    font-size: 20px;
`;

export default Heading;