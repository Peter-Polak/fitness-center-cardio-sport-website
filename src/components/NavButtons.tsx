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
        
        const buttons : Array<JSX.Element> = [];
        
        for(const key in sitemap)
        {
            const button = <NavButton route={sitemap[key]} key={key} closeNav={closeNav}/>;
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