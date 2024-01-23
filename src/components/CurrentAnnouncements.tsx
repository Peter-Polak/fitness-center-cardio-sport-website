import { Component } from "react";
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';
import DayOpeningHours from "./DayOpeningHours";
import styled from "styled-components";
import { Day } from "../utilities/enums";
import Change from "./Change";
import WarningText from "./WarningText";
import { texts } from "../Texts";

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
                    title="Zmena otváracích hodín od 08.01.2024 do 28.02.2024" 
                    date="03.01.2024">
                        V utorky v čase 17:30 - 18:30 bude fitness centrum rezervováne iba pre futbalistky FC Košice a spinning. Ospravedlňujeme sa možné vzniknuté problémy a ďakujeme za pochopenie.
                        <hr />
                        <DayOpeningHours day={Day.Tuesday} oldTime={["15:00 - 22:00"]} times={["15:00 - 17:30", "18:30 - 22:00"]} ></DayOpeningHours>
                        <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                </Announcement>
            </section>
        );
    }
}

const Warning = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 800px;
    padding: 30px;

    border: 3px solid ${props => props.theme.color.warning.normal};
    border-radius: 10px;
`;

const NoAnnoucements = styled.h2`
    text-align: center;
    margin: 50px;
`;

export default CurrentAnnouncements;