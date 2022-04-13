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
                {/* <NoAnnoucements>Žiadne nové oznamy.</NoAnnoucements> */}
                <Announcement 
                    icon="egg"
                    title="Otváracie hodiny počas veľkonočných sviatkov" 
                    date="12.04.2022">
                        <DayOpeningHours day={Day.Friday} date="15.04.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Saturday} date="16.04.2022" times={["16:00 - 21:00"]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Sunday} date="17.04.2022" times={["16:00 - 21:00"]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Monday} date="18.04.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                        <p><Link to={Sitemap.openingHours.path}>→ Aktuálne otváracie hodiny ←</Link></p>
                </Announcement>
            </section>
        );
    }
}

const NoAnnoucements = styled.div`
    margin: 50px;
`;

export default CurrentAnnouncements;