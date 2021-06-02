import { Component } from "react";
import styled from "styled-components";
import NotificationManager from "../NotificationManager";
import { Appear } from "../styles/animations";

import MaterialIcon from "./MaterialIcon";

export enum NotificationType
{
    NORMAL = "NORMAL", 
    SUCCES = "SUCCES", 
    ERROR = "ERROR"
}

export interface INotificationProps
{
    id : string
    icon : string
    content : string
    timeOut? : number
    onClick? : () => void
    type? : NotificationType
    className? : string
}

interface INotificationState
{
    
}

class Notification extends Component<INotificationProps, INotificationState>
{
    timeOut : NodeJS.Timeout | undefined;
    
    constructor(props : INotificationProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    componentDidMount()
    {
        const { timeOut } = this.props;
        
        if(timeOut) this.timeOut = setTimeout(() => NotificationManager.deleteNotification(this.props.id), timeOut);
    }
    
    componentWillUnmount()
    {
        if(this.timeOut) clearTimeout(this.timeOut);
    }
    
    render() : JSX.Element
    {
        const { icon, type, onClick, className, children }  = this.props;
        
        return (
            <Container className={className} onClick={onClick}>
                <Indicator type={type}/>
                <Icon icon={icon} type={type}/>
                <Text>{children}</Text>
            </Container>
        );
    }
}

const Container = styled.div`
    position: relative;
    
    height: 100px;
        
    display: flex;
    flex-direction: row;
    
    margin-bottom: 15px;
    
    overflow: hidden;
    
    color: black;
    
    border: 1px solid #202020;
    border-radius: 5px;
    background-color: white;
    
    transition: all 0.5s;
    animation: ${Appear} 0.5s ease-in-out;
`;

const Indicator = styled.div<{ type : NotificationType | undefined }>`
    width: 20px;
    background-color: ${
        props => 
        {
            switch(props.type)
            {
                case NotificationType.SUCCES:
                    return `${props.theme.color.succes.normal}`;
                case NotificationType.ERROR:
                    return `${props.theme.color.warning.normal}`;
                case NotificationType.NORMAL:
                default:
                    return `${props.theme.color.primary.normal}`;
            }
        }
    };
    
    transition: all 0.5s;
`;

const Icon = styled(MaterialIcon)<{ type : NotificationType | undefined }>`
    margin: auto 20px;
        
    color: ${
        props => 
        {
            switch(props.type)
            {
                case NotificationType.SUCCES:
                    return `${props.theme.color.succes.normal}`;
                case NotificationType.ERROR:
                    return `${props.theme.color.warning.normal}`;
                case NotificationType.NORMAL:
                default:
                    return `${props.theme.color.primary.normal}`;
            }
        }
    };
    text-align: center;
    font-size: 2.3em;
    
    transition: all 0.5s;
`;

const Text = styled.div`
    align-self: center;
    margin: 10px 15px 10px 0;
    color: black;
    
    transition: all 0.5s;
`;

export default Notification;