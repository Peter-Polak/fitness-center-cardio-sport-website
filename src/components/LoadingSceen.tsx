import { Component } from "react";
import styled, { keyframes } from 'styled-components';
import MaterialIcon from "./MaterialIcon";


interface ILoadingSceenProps
{
    
}

interface ILoadingSceenState
{
    
}

class LoadingSceen extends Component<ILoadingSceenProps, ILoadingSceenState>
{
    constructor(props : ILoadingSceenProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
        <Container>
            <Icon icon="hourglass_empty" size="150px"/>
        </Container>
        );
    }
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    
    background-color: ${props => props.theme.color.background};
`;

const rotateAnimation = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const Icon = styled(MaterialIcon)`
    animation: ${rotateAnimation} 1.5s infinite ease;
`;

export default LoadingSceen;