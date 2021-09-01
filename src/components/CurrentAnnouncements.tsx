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
                    title="Otváracie hodiny počas štátnych sviatkov v septembri" 
                    date="01.09.2021">
                    <Paragraph>01.09.2021 (Streda): 15:00 - 22:00</Paragraph>
                    <Paragraph>15.09.2021 (Streda): 15:00 - 22:00</Paragraph>
                    <Paragraph>Tešíme sa na vás!</Paragraph>
                </Announcement>

                <Announcement 
                    title="Zmena otváracích hodín od 01.09.2021" 
                    date="30.08.2021">
                    Sobota: <del>17:00 - 20:00</del> → 16:00 - 21:00
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