import { Component } from "react";
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';
import Dropdown, { DropdownType } from '../components/Dropdown';
import styled from "styled-components";

interface IOldAnnouncementsProps
{
    
}

interface IOldAnnouncementsState
{
    
}

class OldAnnouncements extends Component<IOldAnnouncementsProps, IOldAnnouncementsState>
{
    constructor(props : IOldAnnouncementsProps)
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
                <Dropdown title="Staré oznamy" type={DropdownType.PRIMARY}>
                    <Dropdown title="September, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            title="Otváracie hodiny počas štátnych sviatkov v septembri" 
                            date="01.09.2021">
                            <Paragraph>01.09.2021 (Streda): 15:00 - 22:00</Paragraph>
                            <Paragraph>15.09.2021 (Streda): 15:00 - 22:00</Paragraph>
                            <Paragraph>Tešíme sa na vás!</Paragraph>
                        </Announcement>
                    </Dropdown>

                    <Dropdown title="August, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                        title="Zmena otváracích hodín od 01.09.2021" 
                        date="30.08.2021">
                            Sobota: <del>17:00 - 20:00</del> → 16:00 - 21:00
                            <Paragraph><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></Paragraph>
                    </Announcement>
                    </Dropdown>

                    <Dropdown title="Júl, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                        title="Zmena otváracích hodín od 01.07.2021 do 31.08.2021 (Úprava)" 
                        date="02.07.2021">
                            Sobota: <del>16:00 - 21:00</del> → 17:00 - 20:00 <Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link>
                        </Announcement>
                    </Dropdown>

                    <Dropdown title="Jún, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                        title="Otváracie hodiny počas štátneho sviatku" 
                        date="29.06.2021">
                            V pondelok 05.07.2021 (štátny sviatok) máme otvorené od 15:00 do 22:00. Tešíme sa na vás!
                        </Announcement>
                    </Dropdown>
                    
                    <Dropdown title="Máj, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            title="Zmena otváracích hodín od 01.07.2021 do 31.08.2021" 
                            date="18.05.2021">
                                Sobota: <del>16:00 - 21:00</del> → zatvorené <Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link>
                        </Announcement>
                        
                        <Announcement 
                        title="Zrušenie potreby sa vopred rezervovať" 
                        date="13.05.2021">
                            Vážení návštevníci, oznamujeme Vám, že od pondelka 17.05.2021 rušíme rezervačný systém a opätovne začne platiť režim otváracích hodín. Tešíme sa na vás!
                        </Announcement>
                    </Dropdown>
                </Dropdown>
            </section>
        );
    }
}

const Paragraph = styled.p`
    margin: 5px 0;
`;

export default OldAnnouncements;