import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Page } from "./Routes";

interface INavButtonProps
{
    page : Page
    closeNav : (event : any) => void
    className? : string
}

interface INavButtonState
{
    
}

class NavButton extends Component<INavButtonProps, INavButtonState>
{
    constructor(props : INavButtonProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { page, closeNav, className } = this.props;
        let isSelected = window.location.pathname === page.path ? "selected" : "";
        
        return (
            <Container to={page.path} key={page.name} onClick={closeNav} className={`${className} ${isSelected}`}>
                {page.name}
            </Container>
        );
    }
}

const Container = styled(Link)`
    padding: 20px 0 20px 25px;
    
    text-align: unset;
    color: ${props => props.theme.color.text};
    font-size: 1.2em;
    font-weight: 700;
    text-decoration: none;
    
    border-bottom: 1px solid rgba(128, 128, 128, 0.425);
    
    transition: all 0.5s;
    
    &:hover
    {
        color: ${props => props.theme.color.primary.normal};
        background-color: rgb(53, 53, 53);
        padding-left: 50px;
    }
    
    &.selected
    {
        color: #202020;
        background-color: ${props => props.theme.color.primary.normal};
    }
`;

export default NavButton;