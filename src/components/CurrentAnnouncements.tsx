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
                    icon="ac_unit"
                    title="Otváracie hodiny počas sviatkov" 
                    date="10.12.2022">
                        <DayOpeningHours day={Day.Saturday} date="24.12.2022" times={[]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Sunday} date="25.12.2022" times={[]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Monday} date="26.12.2022" times={[]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Tuesday} date="27.12.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
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