import { Component } from "react";
import styled from 'styled-components';
import Button from "./Button";

import MaterialIcon from "./MaterialIcon";

export enum StatusType
{
    SUCCES, ERROR
}

interface IStatusScreenProps
{
    type : StatusType
    fullscreen : boolean
    close? : () => void
    icon? : string
    className? : string
}

interface IStatusScreenState
{
    
}

class StatusScreen extends Component<IStatusScreenProps, IStatusScreenState>
{
    constructor(props : IStatusScreenProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const { type, fullscreen, close, className, children } = this.props;
        let icon : string = "";
        
        if(this.props.icon) icon = this.props.icon
        else if(type === StatusType.SUCCES) icon = "check_circle"
        else if(type === StatusType.ERROR) icon = "error";
        
        return (
            <Container className={className} fullscreen={fullscreen}>
                { close && <CloseButton onClick={close}><MaterialIcon icon="close" size="35px"/></CloseButton> }
                <StyledMaterialIcon icon={icon} type={type} size="100px"/>
                <Content>
                    {children}
                </Content>
            </Container>
        );
    }
}

const Container = styled.div<{ fullscreen : boolean }>`
    position: ${props => props.fullscreen ? "fixed" : "absolute"};
    top: 0;
    left: 0;
    z-index: 997;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    
    background-color: ${props => props.theme.color.background};
`;

const StyledMaterialIcon = styled(MaterialIcon)<{ type : StatusType }>`
    margin-bottom: 40px;
    
    color: 
    ${
        props => 
        {
            switch(props.type)
            {
                case StatusType.ERROR:
                    return `${props.theme.color.warning.normal}`;
                    
                default:
                case StatusType.SUCCES:
                    return `${props.theme.color.succes.normal}`;
            }
        }
    };
`;

const CloseButton = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px;
`;

const Content = styled.div`
    font-size: 18px;
`;

export default StatusScreen;