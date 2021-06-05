import { Component } from "react";
import styled, { keyframes  } from 'styled-components';

import { ReactComponent as Instagram } from '../img/instagram-logo.svg';

import { Page } from '../components/Routes';
import MaterialIcon from "./MaterialIcon";
import NavButton from "./NavButton";

interface INavigationProps
{
    isVisible : boolean
    closeNav : (event : any) => void
    pages : {[page : string] : Page}
    className? : string
}

interface INavigationState
{
    selectedPage : string
}

class Navigation extends Component<INavigationProps, INavigationState>
{
    constructor(props : INavigationProps)
    {
        super(props);
        let pathname = window.location.pathname
        this.state = 
        {
            selectedPage : pathname
        }
    }
    
    render() : JSX.Element
    {
        const { isVisible, closeNav, pages, className } = this.props;
        const buttons : Array<JSX.Element> = [];
        
        for(const key in pages)
        {
            let page = pages[key];
            const button = <NavButton page={page} key={key} closeNav={closeNav}/>;
            buttons.push(button);
        }
            
        return (
            <div>
                <Nav isVisible={isVisible} className={className}>
                    <Header>
                        <span>Menu</span>
                        <CloseButton onClick={closeNav}><MaterialIcon icon="close" color="ligth"/></CloseButton>
                    </Header>
                    
                    <Buttons>
                        {buttons}
                    </Buttons>
                    
                    <Footer>
                        <IconLink href="https://www.facebook.com/groups/207982942629720" target="_blank" rel="noreferrer"><MaterialIcon icon="facebook"/></IconLink>
                        <IconLink href="https://www.instagram.com/cardiosportfitness" target="_blank" rel="noreferrer"><InstagramIcon/></IconLink>
                    </Footer>
                </Nav>
                
                <Background isVisible={isVisible} onClick={closeNav}/>
            </div>
        );
    }
}
const navMaxWidth = "360px";

const Nav = styled.nav<{isVisible : boolean}>`
    position: fixed;
    top: 0;
    left: ${props => (props.isVisible ? 0 : `-${navMaxWidth}`)};
    z-index: 999;
    
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    width: 100vw;
    max-width: ${navMaxWidth};
    
    background-color: #292929;
    
    transition: left 0.5s;
`;

const Header = styled.div`
    padding: 30px;
    
    color: ${props => props.theme.color.primary.normal};
    font-family: "Bebas Neue";
    font-size: 2em;
    font-weight: 700;
    text-align: unset;
    
    background-color: #222222;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.39);
`;

const CloseButton = styled.button`
    position: absolute;
    right: 0;
    
    margin: auto 25px;
    
    font-size: 1em;
    
    transition: all 0.5s;
    
    &:hover
    {
        transform: scale(1.1);
        background-color: #5252529f;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    
    overflow-y: auto;
`;

const Footer = styled.footer`
    /* position: absolute; */
    /* bottom: 0; */
    
    margin:  20px 20px 50px 20px;
`;

const IconLink = styled.a`
    margin-right: 25px;
    
    color: ${props => props.theme.color.primary.normal};
    font-size: 25px;
`;

const InstagramIcon = styled(Instagram)`
    color: ${props => props.theme.color.primary.normal};
    /* margin: 5px; */
`;

const opacityAnimation = keyframes`
    from { opacity: 0%; }
    to { opacity: 100%; }
`;

const Background = styled.div<{isVisible : boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    
    display: ${props => props.isVisible ? "block" : "none"};

    width: 100vw;
    height: 100vh;
    
    background-color: #000000d3;
    animation-name: ${opacityAnimation};
    animation-duration: 0.5s;
    animation-direction: ${props => props.isVisible ? "normal" : "reverse"};
`;
export default Navigation;