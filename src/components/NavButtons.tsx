import { Component } from "react";
import styled from "styled-components";

import NavButton from "./NavButton";
import { ISitemap } from "./Routes";

interface INavButtonsProps
{
    sitemap : ISitemap
    closeNav : () => void
}

interface INavButtonsState
{
    
}

class NavButtons extends Component<INavButtonsProps, INavButtonsState>
{
    constructor(props : INavButtonsProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { sitemap, closeNav } = this.props;
        const pathname = window.location.pathname
        const buttons : Array<JSX.Element> = [];

        for(const key in sitemap)
        {
            var route = sitemap[key];
            
            if(pathname.includes("notrack") && !route.path.includes("notrack")) route.path = "/notrack" + route.path;
            const button = <NavButton route={route} key={key} closeNav={closeNav}/>;
            buttons.push(button);
        }
        
        return (
            <Buttons>
                {buttons}
            </Buttons>
        );
    }
}

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    
    overflow-y: auto;
`;

export default NavButtons;