import { Component } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';

interface ICurrentAnnouncementsProps
{
    
}

interface ICurrentAnnouncementsState
{
    
}

class CurrentAnnouncements extends Component<ICurrentAnnouncementsProps, ICurrentAnnouncementsState>
{
    constructor(props : ICurrentAnnouncementsProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <section>
                <Announcement 
                    icon="schedule"
                    title="Zmena otváracích hodín od 27.09.2021" 
                    date="26.09.2021">
                        Utorok: <del>15:00 - 22:00</del> → 15:00 - 16:00, 17:00 - 22:00
                        <Paragraph><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></Paragraph>
                </Announcement>
            </section>
        );
    }
}

const Paragraph = styled.p`
    margin: 5px 0;
`;

export default CurrentAnnouncements;