import { Component } from "react";
import styled from 'styled-components';

interface IMaterialIconProps
{
    icon : string,
    color? : "ligth" | "dark" | "theme",
    size? : string,
    className? : string
}

class MaterialIcon extends Component<IMaterialIconProps>
{
    render() : JSX.Element
    {
        return (
            <Icon color={this.props.color} size={this.props.size} className={`material-icons ${this.props.className}`}>{this.props.icon}</Icon>
        );
    }
}

const Icon = styled.span<{color : "ligth" | "dark" | "theme" | undefined, size : string | undefined}>`
    user-select: none;
    margin: 5px;
    
    font-size: ${props =>
    {
        if(props.size === undefined)
        {
            return "1.3em";
        }
        else
        {
            return props.size;
        }
    }};
    
    color: ${props => 
    {
        switch(props.color)
        {
            case "ligth":
                return props.theme.color.text;
                
            case "dark":
                return "#3a3a3a";
                
            default:
            case "theme":
                return props.theme.color.primary.normal;
        }
    }
    }
`;

export default MaterialIcon;