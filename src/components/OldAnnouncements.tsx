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
                    <Dropdown title="December, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 17.12.2021" 
                            date="15.12.2021">
                                <p>Pondelok: <del>15:00 - 22:00</del> → 15:00 - 20:00</p>
                                <p>Utorok: <del>15:00 - 16:00, 17:00 - 22:00</del> → 15:00 - 20:00</p>
                                <p>Streda: <del>15:00 - 22:00</del> → 15:00 - 20:00</p>
                                <p>Štvrtok: <del>15:00 - 22:00</del> → 15:00 - 20:00</p>
                                <p>Piatok : <del>15:00 - 22:00</del> → 15:00 - 20:00</p>
                                <p>Sobota: <del>16:00 - 21:00</del> → 15:00 - 20:00</p>
                                <p>Nedeľa: <del>16:00 - 21:00</del> → 15:00 - 20:00</p>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement> 
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 14.12.2021" 
                            date="13.12.2021">
                                <p>Pondelok: <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                                <p>Utorok: <del>15:00 - 16:00, 17:00 - 20:00</del> → 15:00 - 16:00, 17:00 - 22:00</p>
                                <p>Streda: <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                                <p>Štvrtok: <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                                <p>Piatok : <del>15:00 - 20:00</del> → 15:00 - 22:00</p>
                                <p>Sobota: <del>15:00 - 20:00</del> → 16:00 - 21:00</p>
                                <p>Nedeľa: <del>15:00 - 20:00</del> → 16:00 - 21:00</p>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                        <Announcement 
                            icon="celebration"
                            title="Znovuotvorenie fitness centra od 10.12.2021" 
                            date="08.12.2021">
                                <p>S radosťou Vám oznamujeme, že od 10.12.2021 (piatok) bude fitness centrum znovu otvorené! </p>
                                <p><Warning>!!! ZMENY !!! :</Warning></p>
                                <ul>
                                    <li>fitness centrum bude fungovať podľa nových nariadení v režime OP (očkovaní/po prekonaní)</li>
                                    <li>otváracie hodiny budú dočasne skrátené iba do 20:00 a cez víkend bude otvorené od 15:00, otváracie hodiny si môžete pozrieť <Link to={Sitemap.openingHours.path}>→ tu ← </Link></li>
                                </ul>
                                <p>Otváracie hodiny sa môžu zmeniť z dňa na deň podľa toho aké opatrenia vláda prijme, čiže sledujte stránkú a Facebook skupinu fitness centra pre najnovšie zmeny!</p>
                                <p>Prosíme Vás, aby ste sa správali ohľaduplne voči ostatným návštevníkom fitness centra:</p>
                                <ul>
                                    <li>Ak sa necítite dobre/ste chorý, radšej zostaňte doma, aby ste náhodou nenakazili aj iných</li>
                                    <li>Snažte sa držať čo najväčší odstup od iných návštevníkov fitness centra</li>
                                    <li>Pri cvičení používajte vlastný uterák na prekrytie plôch, s ktorými prichádzate do kontaktu</li>
                                    <li>Po docvičení vydenzifukujte po sebe náčinie, ktoré ste použili</li>
                                </ul>
                                <p>Tešíme sa na Vás!</p>
                        </Announcement>
                    </Dropdown>

                    <Dropdown title="November, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="block"
                            title="Zatvorenie fitness centra od 15.11.2021 do odvolania" 
                            date="15.11.2021">
                                Je nám ľúto Vám oznámiť, že podľa nariadení <a href="https://automat.gov.sk/kosice">covid automatu</a> pre fitness centrá v Košiciach bude fitness centrum Cardio Sport od 15.11.2021 až do odvolania ZATVORENÉ!
                        </Announcement>
                    </Dropdown>

                    <Dropdown title="September, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                        icon="schedule"
                        title="Zmena otváracích hodín od 27.09.2021" 
                        date="26.09.2021">
                            Utorok: <del>15:00 - 22:00</del> → 15:00 - 16:00, 17:00 - 22:00
                            <NewLine><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></NewLine>
                        </Announcement>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 27.09.2021" 
                            date="26.09.2021">
                                Utorok: <del>15:00 - 22:00</del> → 15:00 - 16:00, 17:00 - 22:00
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>

                        <Announcement 
                            icon="schedule"
                            title="Otváracie hodiny počas štátnych sviatkov v septembri" 
                            date="01.09.2021">
                                <NewLine>01.09.2021 (Streda): 15:00 - 22:00</NewLine>
                                <NewLine>15.09.2021 (Streda): 15:00 - 22:00</NewLine>
                                <NewLine>Tešíme sa na vás!</NewLine>
                        </Announcement>
                    </Dropdown>

                    <Dropdown title="August, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                        icon="schedule"
                        title="Zmena otváracích hodín od 01.09.2021" 
                        date="30.08.2021">
                            Sobota: <del>17:00 - 20:00</del> → 16:00 - 21:00
                            <NewLine><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></NewLine>
                    </Announcement>
                    </Dropdown>

                    <Dropdown title="Júl, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 01.07.2021 do 31.08.2021 (Úprava)" 
                            date="02.07.2021">
                                Sobota: <del>16:00 - 21:00</del> → 17:00 - 20:00 <Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link>
                        </Announcement>
                    </Dropdown>

                    <Dropdown title="Jún, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Otváracie hodiny počas štátneho sviatku" 
                            date="29.06.2021">
                                V pondelok 05.07.2021 (štátny sviatok) máme otvorené od 15:00 do 22:00. Tešíme sa na vás!
                        </Announcement>
                    </Dropdown>
                    
                    <Dropdown title="Máj, 2021" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 01.07.2021 do 31.08.2021" 
                            date="18.05.2021">
                                Sobota: <del>16:00 - 21:00</del> → zatvorené <Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link>
                        </Announcement>
                        
                        <Announcement 
                            icon="priority_high"
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

const NewLine = styled.p`
    margin: 5px 0;
`;

const Warning = styled.span`
    color: ${props => props.theme.color.warning.normal};
`;

export default OldAnnouncements;