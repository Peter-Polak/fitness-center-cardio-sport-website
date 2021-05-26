import { Component } from 'react';
import styled from 'styled-components';

interface IAppHeaderProps
{
    src : string;
    alt : string;
    openNav : (event : any) => void
    className? : string
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
        const { src, alt, openNav, className } = this.props;
        
        return (
            <Header>
                <HeaderImage className={className} src={src} alt={alt} onClick={openNav}></HeaderImage>
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