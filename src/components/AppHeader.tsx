import { Component } from 'react';
import styled from 'styled-components';

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