import { Component } from "react";
import styled from "styled-components";
import NotificationManager, { NotificationAction } from "../NotificationManager";
import Notification, { INotificationProps } from "./Notification";

interface INotificationsProps
{
    
}

interface INotificationsState
{
    notifications : Array<INotificationProps>
}

class Notifications extends Component<INotificationsProps, INotificationsState>
{
    constructor(props : INotificationsProps)
    {
        super(props);
        this.state = 
        {
            notifications : []
        }
    }
    
    componentDidMount()
    {
        NotificationManager.addListener(this.updateNotifications.bind(this));
    }
    
    componentWillUnmount()
    {
        NotificationManager.removeListener();
    }
    
    updateNotifications(action : NotificationAction, notification : INotificationProps, notifications : Array<INotificationProps>)
    {
        this.setState({ notifications : notifications });
    }

    render() : JSX.Element
    {
        const notificationComponents = this.state.notifications.map(
            (notification) =>
            {
                return <Notification 
                {...notification} 
                onClick={() => NotificationManager.deleteNotification(notification.id)} 
                key={notification.id}>{notification.content}</Notification>
            }
        );
        
        return (
            <Container>
                {notificationComponents}
            </Container>
        );
    }
}

const Container = styled.div`
    position: fixed;
    top: 15px;
    
    /*Used to center*/
    left: 50%;
    transform: translateX(-50%); 
    
    display: flex;
    flex-direction: column;
    
    width: 70%;
    max-width: 500px;
    
    z-index: 9999;
`;

export default Notifications;