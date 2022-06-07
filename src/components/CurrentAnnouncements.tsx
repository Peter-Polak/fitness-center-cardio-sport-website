import { Component } from "react";
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';
import DayOpeningHours from "./DayOpeningHours";
import styled from "styled-components";
import { Day } from "../utilities/enums";

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
                {/* <NoAnnoucements>Žiadne nové oznamy</NoAnnoucements> */}
                <Announcement 
                    icon="schedule"
                    title="Zmena otváracích hodín od 01.07.2022 do 31.08.2022" 
                    date="06.06.2022">
                        <DayOpeningHours day={Day.Saturday} oldTime={["16:00 - 21:00"]} times={[]} ></DayOpeningHours>
                        <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                </Announcement>
            </section>
        );
    }
}

const NoAnnoucements = styled.h2`
    text-align: center;
    margin: 50px;
`;

export default CurrentAnnouncements;