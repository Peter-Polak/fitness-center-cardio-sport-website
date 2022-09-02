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
                    title="Zmena otváracích hodín od 01.09.2022" 
                    date="29.08.2022">
                        <DayOpeningHours day={Day.Saturday} oldTime={[]} times={["16:00 - 21:00"]} ></DayOpeningHours>
                        <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                </Announcement>
                <Announcement 
                    icon="euro"
                    title="Zmena cenníka od 01.08.2022" 
                    date="16.06.2022 (Upravené 28.06.2022)">
                        <p>Jednorazový vstup: <Change oldString="2,00 €" newString="2,50 €"/></p>
                        <p>Permanentka - 1 Mesiac: <Change oldString="20,00 €" newString="25,00 €"/></p>
                        <p>Permanentka - 3 Mesiace: <Change oldString="55,00 €" newString="65,00 €"/></p>
                        <p>Permanentka - 6 Mesiacov: <Change oldString="95,00 €" newString="115,00 €"/></p>
                        <p>Permanentka - 12 Mesiacov: <Change oldString="175,00 €" newString="199,00 €"/></p>
                        <p><Link to={Sitemap.pricing.path}> → Aktuálny cenník ←</Link></p>
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