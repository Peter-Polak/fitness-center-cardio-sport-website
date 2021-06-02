import { INotificationProps, NotificationType } from "./components/Notification";
import { getUniqueIdentifier } from "./helpers";

export enum NotificationAction
{
    CREATE = "CREATE",
    EDIT = "EDIT",
    DELETE = "DELETE"
}

export type NotificationChangeHandler = (action : NotificationAction, notification : INotificationProps, notifications : Array<INotificationProps>) => void;

class NotificationManager
{
    changeListener : NotificationChangeHandler = () => {};
    createListener : NotificationChangeHandler = () => {};
    editListener : NotificationChangeHandler = () => {};
    deleteListener : NotificationChangeHandler = () => {};
    notifications : Array<INotificationProps> = [];
    
    addListener(listener : NotificationChangeHandler, action? : NotificationAction)
    {
        if(action)
        {
            switch(action)
            {
                case NotificationAction.CREATE:
                    this.createListener = listener;
                    break;
                case NotificationAction.EDIT:
                    this.editListener = listener;
                    break;
                case NotificationAction.DELETE:
                    this.deleteListener = listener;
                    break;
            }
        }
        else
        {
            this.changeListener = listener;
        }
    }
    
    removeListener(action? : NotificationAction)
    {
        if(action)
        {
            switch(action)
            {
                case NotificationAction.CREATE:
                    this.createListener = () => {};
                    break;
                case NotificationAction.EDIT:
                    this.editListener = () => {};
                    break;
                case NotificationAction.DELETE:
                    this.deleteListener = () => {};
                    break;
            }
        }
        else
        {
            this.changeListener = () => {};
        }
    }
    
    createNotification(icon : string, content : string, timeOut? : number,  type? : NotificationType)
    {
        let uniqueId = getUniqueIdentifier();
        
        let notification : INotificationProps = 
        {
            id : uniqueId,
            type : type,
            icon : icon,
            content : content, 
            timeOut : timeOut
        };
        
        this.notifications.push(notification);
        this.createListener(NotificationAction.CREATE, notification, this.notifications);
        this.changeListener(NotificationAction.CREATE, notification, this.notifications);
        
        return notification;
    }
    
    editNotification(id : string, icon? : string, content? : string, type? : NotificationType)
    {
        let notificationIndex = this.notifications.findIndex((notification) => notification.id === id);
        let notification = this.notifications[notificationIndex];
        
        if(icon) notification.icon = icon;
        if(content) notification.content = content;
        if(type) notification.type = type;
        
        this.editListener(NotificationAction.EDIT, notification, this.notifications);
        this.changeListener(NotificationAction.EDIT, notification, this.notifications);
        
        return notification;
    }
    
    deleteNotification(id : string)
    {
        let notificationIndex = this.notifications.findIndex((notification) => notification.id === id);
        let notification = this.notifications[notificationIndex];
        this.notifications.splice(notificationIndex, 1);
        
        this.deleteListener(NotificationAction.DELETE, notification, this.notifications);
        this.changeListener(NotificationAction.DELETE, notification, this.notifications);
        
        return notification;
    }
}

export default new NotificationManager();