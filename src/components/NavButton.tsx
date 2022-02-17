import { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MaterialIcon from "./MaterialIcon";
import { IRoute } from "./Routes";

interface INavButtonProps
{
    route : IRoute
    closeNav : () => void
    icon? : string
    className? : string
}

interface INavButtonState
{
    isSubMenuVisible : boolean
}

class NavButton extends Component<INavButtonProps, INavButtonState>
{
    constructor(props : INavButtonProps)
    {
        super(props);
        this.state = 
        {
            isSubMenuVisible : false
        }
        
        this.toggleSubMenu = this.toggleSubMenu.bind(this);
    }
    
    toggleSubMenu()
    {
        const { isSubMenuVisible } = this.state;
        this.setState({ isSubMenuVisible : !isSubMenuVisible });
    }
    
    getContent()
    {
        const { route, closeNav, className } = this.props;
        const { isSubMenuVisible } = this.state;
        
        if(route.routes.length === 0)
        {
            return (
                <Link className={className} onClick={closeNav} to={route.path} activeClassName="selected" exact>
                    {route.name}
                </Link>
            );
        }
        else
        {
            const links = route.routes.map(
                (route) =>
                {
                    return(
                        <SubLink className={className} onClick={closeNav} to={route.path} activeClassName="selected" exact key={route.path}>
                            {route.name}
                        </SubLink>
                    );
                }
            );
            return <>
                <Link as="button" className={className} onClick={this.toggleSubMenu}>
                    {this.props.icon ? <MaterialIcon icon={this.props.icon}/> : ""}
                    {route.name}
                </Link>
                
                <Subcategories isVisible={isSubMenuVisible}>
                    {links}
                </Subcategories>
            </>
        }
    }

    render() : JSX.Element
    {
        return (
            <>
                {this.getContent()}
            </>
        );
    }
}

const Link = styled(NavLink)`
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

const SubLink = styled(Link)`
    padding: 10px 0 10px 25px;
    font-size: 1.1em;
    background-color: rgb(29, 29, 29);
`;

const Subcategories = styled.div<{ isVisible : boolean }>`
    display : ${props => props.isVisible ? "flex" : "none"};
    flex-direction: column;
`;

export default NavButton;