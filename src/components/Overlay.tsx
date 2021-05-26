import { Component } from "react";
import styled from 'styled-components';

import MaterialIcon from '../components/MaterialIcon';

interface IOverlayProps
{
    closeOverlay : (event : any) => void
    className? : string
}

interface IOverlayState
{
    
}

class Overlay extends Component<IOverlayProps, IOverlayState>
{
    constructor(props : IOverlayProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { closeOverlay, className, children } = this.props;
        
        return (
            <Container className={className}>
                <CloseButton onClick={closeOverlay}><MaterialIcon icon="close"/></CloseButton>
                <Content>
                    {children}
                </Content>
            </Container>
        );
    }
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100vw;
    height: 100vh;
    
    background-color: #000000e4;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    
    margin: 25px;
    
    font-size: 25px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 80%;
    width: 90%;
`;

export default Overlay;