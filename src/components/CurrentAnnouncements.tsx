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
                    title="Zmena otváracích hodín od 10.01.2022" 
                    date="05.01.2022">
                        <p>Pondelok: <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                        <p>Utorok: <del>15:00 - 20:00</del> → 15:00 - 16:00, 17:00 - 22:00</p>
                        <p>Streda: <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                        <p>Štvrtok: <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                        <p>Piatok : <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                        <p>Sobota: <del>15:00 - 20:00</del> → 16:00 - 21:00</p>
                        <p>Nedeľa: <del>15:00 - 20:00</del> → 16:00 - 21:00</p>
                        <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                </Announcement>

                <Announcement 
                    icon="door_sliding"
                    title="Zmena vchodu do fitness centra od 21.12.2021 do 10.01.2022" 
                    date="20.12.2021">
                        <p>Od 21.12.2021 do 10.01.2022 bude uzavretý hlavný vchod do budovy a vstup do fitness centra bude možný len cez zadný vchod.</p>
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!4v1640032361644!6m8!1m7!1syHGE6IpTcdJLnaXgepbTGg!2m2!1d48.69742168289121!2d21.23516653674668!3f344.8596644956723!4f-15.327564707157393!5f0.4000000000000002" 
                        width="800" 
                        height="600" 
                        style={{border:0, height: "500px", width: "100%", maxWidth:"800px"}} 
                        allowFullScreen={true} 
                        loading="lazy"
                        title="Google Street View"></iframe>
                </Announcement> 

                <Announcement 
                    icon="ac_unit"
                    title="Otváracie hodiny počas sviatkov" 
                    date="15.12.2021 (Upravené 30.12.2021)">
                        <p>24.12.2021 (Piatok) - <Warning>ZATVORENÉ</Warning></p>
                        <p>25.12.2021 (Sobota) - <Warning>ZATVORENÉ</Warning></p>
                        <p>26.12.2021 (Nedeľa) - <Warning>ZATVORENÉ</Warning></p>
                        <p>31.12.2021 (Piatok) - <Warning>ZATVORENÉ</Warning></p>
                        <p>01.01.2022 (Sobota) - <Warning>ZATVORENÉ</Warning></p>
                        <p>06.01.2022 (Štvrtok) - 15:00 - 20:00</p>
                </Announcement>     
            </section>
        );
    }
}

const Warning = styled.span`
    color: ${props => props.theme.color.warning.normal};
`;

export default CurrentAnnouncements;