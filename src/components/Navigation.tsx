import { Component } from "react";
import styled, { keyframes  } from 'styled-components';

import { ReactComponent as Instagram } from '../img/instagram-logo.svg';

import { ISitemap } from '../components/Routes';
import MaterialIcon from "./MaterialIcon";
import NavButtons from "./NavButtons";

interface INavigationProps
{
    isVisible : boolean
    closeNav : () => void
    sitemap : ISitemap
    className? : string
}

interface INavigationState
{
    
}

class Navigation extends Component<INavigationProps, INavigationState>
{
    constructor(props : INavigationProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }
    
    render() : JSX.Element
    {
        const { isVisible, closeNav, sitemap, className } = this.props;
            
        return (
            <div>
                <Nav isVisible={isVisible} className={className}>
                    <Header>
                        <span>Menu</span>
                        <CloseButton onClick={closeNav}><MaterialIcon icon="close" color="ligth"/></CloseButton>
                    </Header>
                    
                    <NavButtons sitemap={sitemap} closeNav={closeNav}/>
                    
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

const Nav = styled.nav<{isVisible : boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    width: 100vw;
    max-width: 360px;
    
    background-color: #292929;
    
    transform: translateX(${props => props.isVisible ? "0" : "-100%"});
    transition: transform 0.5s;
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

const Footer = styled.footer`
    margin:  20px 20px 50px 20px;
`;

const IconLink = styled.a`
    margin-right: 25px;
    
    color: ${props => props.theme.color.primary.normal};
    font-size: 25px;
`;

const InstagramIcon = styled(Instagram)`
    color: ${props => props.theme.color.primary.normal};
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