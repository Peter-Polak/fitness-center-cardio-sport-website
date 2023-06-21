import { Component } from "react";
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';
import DayOpeningHours from "./DayOpeningHours";
import styled from "styled-components";
import { Day } from "../utilities/enums";
import Change from "./Change";

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
                title="Zmena otváracích hodín od 01.07.2023 do 31.08.2023" 
                date="21.06.2023">
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