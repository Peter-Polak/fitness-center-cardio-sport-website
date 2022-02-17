import { Component } from "react";
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';
import DayOpeningHours, { Day } from "./DayOpeningHours";
import styled from "styled-components";

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
                {/* <NoAnnoucements>Žiadne nové oznamy.</NoAnnoucements> */}
                <Announcement 
                    icon="schedule"
                    title="Zmena otváracích hodín od 14.02.2022" 
                    date="14.02.2022">
                        <DayOpeningHours day={Day.THURSDAY} oldTime={["15:00 - 16:00", "17:00 - 22:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                        <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                </Announcement>
            </section>
        );
    }
}

const NoAnnoucements = styled.div`
    margin: 50px;
`;

export default CurrentAnnouncements;