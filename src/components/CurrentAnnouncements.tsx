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
                    title="Otváracie hodiny počas sviatkov" 
                    date="10.11.2022">
                        <DayOpeningHours day={Day.Thursday} date="17.11.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
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