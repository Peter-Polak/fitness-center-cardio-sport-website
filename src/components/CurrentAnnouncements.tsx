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
                    icon="block"
                    title="Zmena otváracích hodín od 15.11.2021" 
                    date="15.11.2021">
                        Je nám ľúto Vám oznámiť, že podľa nariadení <a href="https://automat.gov.sk/kosice">covid automatu</a> pre fitness centrá v Košiciach bude fitness centrum Cardio Sport od 15.11.2021 až do odvolania ZATVORENÉ!
                </Announcement>
            </section>
        );
    }
}

const Paragraph = styled.p`
    margin: 5px 0;
`;

export default CurrentAnnouncements;