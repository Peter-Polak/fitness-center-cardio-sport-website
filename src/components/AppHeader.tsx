import { Component } from 'react';
import styled from 'styled-components';

import MaterialIcon from './MaterialIcon';

interface IAppHeaderProps
{
    src : string;
    alt : string;
    openNav : (event : any) => void
}

interface IAppHeaderState
{
    
}

class AppHeader extends Component<IAppHeaderProps, IAppHeaderState>
{
    constructor(props : IAppHeaderProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <Header>
                <OpenNavButton onClick={this.props.openNav}><MaterialIcon icon="menu" size="34px"/> Menu</OpenNavButton>
                <HeaderImage src={this.props.src} alt={this.props.alt} onClick={this.props.openNav}></HeaderImage>
            </Header>
        );
    }
}

const Header = styled.header`
    display: flex;
    width: 100%;
    margin-bottom: 25px;
`;

const OpenNavButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 10px;
    
    font-family: "Bebas Neue";
    font-size: 18px;
    color: ${props => props.theme.color.primary.normal};
    
    transition: all 0.5s;
    
    &:hover
    {
        transform: scale(1.1);
        background-color: #5252529f;
    }
`;

const HeaderImage = styled.img`
    margin: auto auto;
        
    width: 70%;
    max-width: 500px;
    
    color: ${props => props.theme.color.primary.normal};
    font-size: 2em;
    text-align: center;
    
    user-select: none;
`;

export default AppHeader;