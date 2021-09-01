import { Component } from "react";

import CurrentAnnouncements from "./CurrentAnnouncements";
import OldAnnouncements from "./OldAnnouncements";

interface IAnnouncementsProps
{
    
}

interface IAnnouncementsState
{
    
}

class Announcements extends Component<IAnnouncementsProps, IAnnouncementsState>
{
    constructor(props : IAnnouncementsProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <article>
                <CurrentAnnouncements/>
                <OldAnnouncements/>
            </article>
        );
    }
}

export default Announcements;