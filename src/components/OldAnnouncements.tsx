import { Component } from "react";
import { Link } from 'react-router-dom';

import { Sitemap } from '../components/Routes';
import Announcement from '../components/Announcement';
import Dropdown, { DropdownType } from '../components/Dropdown';
import styled from "styled-components";
import WarningText from "./WarningText";
import DayOpeningHours from "./DayOpeningHours";
import { Day } from "../utilities/enums";
import Change from "./Change";
import { texts } from "../Texts";

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
                    <Dropdown title="November, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="weekend"
                            title="Otváracie hodiny počas dní pracovného pokoja a sviatkov" 
                            date="27.11.2023 (Upravené 25.12.2023)">
                            <DayOpeningHours day={Day.Sunday} date="24.12.2023" times={[]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Monday} date="25.12.2023" times={[]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Tuesday} date="26.12.2023" times={["15:00 - 19:00 (možné zostať aj dlhšie ak budete potrebovať)"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Sunday} date="31.12.2023" times={["15:00 - 19:00 (možné zostať aj dlhšie ak budete potrebovať)"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Monday} date="01.01.2024" times={["15:00 - 19:00 (možné zostať aj dlhšie ak budete potrebovať)"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Saturday} date="06.01.2024" times={["16:00 - 21:00"]} ></DayOpeningHours>
                            <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Október, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="weekend"
                            title="Otváracie hodiny počas dní pracovného pokoja" 
                            date="30.10.2023">
                            <DayOpeningHours day={Day.Wednesday} date="01.11.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Friday} date="17.11.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="August, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="warning"
                            title="Zrušenie rezervácie fitness centra pre FC Košice" 
                            date="28.08.2023">
                                Od 28.08.2023 sa ruší v Utorky rezervácia fitness centra pre FC Košice.
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                        <Announcement 
                            icon="weekend"
                            title="Otváracie hodiny počas dní pracovného pokoja" 
                            date="28.08.2023">
                            <DayOpeningHours day={Day.Tuesday} date="29.08.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Friday} date="01.09.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Friday} date="15.09.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 01.09.2023" 
                            date="23.08.2023">
                                <DayOpeningHours day={Day.Saturday} oldTime={[]} times={["16:00 - 21:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                        <Announcement 
                            icon="euro"
                            title="Zmena cenníka od 01.09.2023" 
                            date="23.08.2023">
                                <p>Jednorazový vstup: <Change oldString="2,50 €" newString="3,00 €"/></p>
                                <p>Jednorazový vstup - futbalisti FC Košice: <Change oldString="1,00 €" newString="ZRUŠENÉ"/></p>
                                <p>Permanentka - 1 Mesiac: <Change oldString="25,00 €" newString="30,00 €"/></p>
                                <p>Permanentka - 3 Mesiace: <Change oldString="65,00 €" newString="78,00 €"/></p>
                                <p>Permanentka - 6 Mesiacov: <Change oldString="115,00 €" newString="138,00 €"/></p>
                                <p>Permanentka - 12 Mesiacov: <Change oldString="199,00 €" newString="249,00 €"/></p>
                                <p><Link to={Sitemap.pricing.path}> → Aktuálny cenník ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Júl, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 12.07.2023 do 31.08.2023" 
                            date="21.07.2023">
                                <DayOpeningHours day={Day.Tuesday} oldTime={["15:00 - 16:30", "17:30 - 22:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                                <Warning>
                                    <WarningText>!!! {texts.warning} !!!</WarningText>
                                    <p>Od 12.07.2023 do 31.08.2023 je každý Utorok v čase 15:00 - 17:00 fitness centrum rezervované pre FC Košice. Je možné si prísť v tom čase zacvičiť, ale nesmiete obmedziť/prekážať futbalistov. Ďakujeme za pochopenie.</p>
                                </Warning>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Jún, 2023" type={DropdownType.SECONDARY}>
                    <   Announcement 
                        icon="schedule"
                        title="Zmena otváracích hodín od 01.07.2023 do 31.08.2023" 
                        date="21.06.2023">
                            <DayOpeningHours day={Day.Saturday} oldTime={["16:00 - 21:00"]} times={[]} ></DayOpeningHours>
                            <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Apríl, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="egg"
                            title="Otváracie hodiny počas sviatkov" 
                            date="05.04.2023">
                                <DayOpeningHours day={Day.Friday} date="07.04.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Monday} date="10.04.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Február, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 23.02.2023" 
                            date="23.02.2023">
                                <DayOpeningHours day={Day.Wednesday} oldTime={["15:00 - 18:00", "19:00 - 22:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Január, 2023" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 18.01.2023 do 22.02.2023" 
                            date="03.01.2023">
                                <DayOpeningHours day={Day.Wednesday} oldTime={["15:00 - 22:00"]} times={["15:00 - 18:00", "19:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="December, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="ac_unit"
                            title="Otváracie hodiny počas sviatkov" 
                            date="24.12.2022">
                                <DayOpeningHours day={Day.Saturday} date="31.12.2022" times={[]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Sunday} date="01.01.2023" times={[]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>

                        <Announcement 
                            icon="ac_unit"
                            title="Otváracie hodiny počas sviatkov" 
                            date="10.12.2022">
                                <DayOpeningHours day={Day.Saturday} date="24.12.2022" times={[]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Sunday} date="25.12.2022" times={[]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Monday} date="26.12.2022" times={[]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="November, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Otváracie hodiny počas sviatkov" 
                            date="10.11.2022">
                                <DayOpeningHours day={Day.Thursday} date="17.11.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Október, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Otváracie hodiny počas sviatkov" 
                            date="27.10.2022">
                                <DayOpeningHours day={Day.Tuesday} date="01.11.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 04.10.2022" 
                            date="04.10.2022">
                                <DayOpeningHours day={Day.Tuesday} oldTime={["15:00 - 16:00", "17:00 - 22:00"]} times={["15:00 - 16:30", "17:30 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="September, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Otváracie hodiny počas sviatkov" 
                            date="14.09.2022">
                                <DayOpeningHours day={Day.Thursday} date="15.09.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="August, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 01.09.2022" 
                            date="29.08.2022">
                                <DayOpeningHours day={Day.Saturday} oldTime={[]} times={["16:00 - 21:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                        <Announcement 
                        icon="schedule"
                        title="Otváracie hodiny počas sviatkov" 
                        date="29.08.2022">
                            <DayOpeningHours day={Day.Monday} date="29.08.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <DayOpeningHours day={Day.Thursday} date="01.09.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                            <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Jún, 2022" type={DropdownType.SECONDARY}>
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
                        <Announcement 
                        icon="schedule"
                        title="Zmena otváracích hodín od 01.07.2022 do 31.08.2022" 
                        date="06.06.2022">
                            <DayOpeningHours day={Day.Saturday} oldTime={["16:00 - 21:00"]} times={[]} ></DayOpeningHours>
                            <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Apríl, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="event_available"
                            title="Otváracie hodiny počas sviatkov" 
                            date="26.04.2022">
                                <DayOpeningHours day={Day.Sunday} date="01.05.2022" times={["16:00 - 21:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Sunday} date="08.05.2022" times={["16:00 - 21:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}>→ Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
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
                    </Dropdown>
                    <Dropdown title="Február, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 14.02.2022" 
                            date="14.02.2022">
                                <DayOpeningHours day={Day.Thursday} oldTime={["15:00 - 16:00", "17:00 - 22:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="Január, 2022" type={DropdownType.SECONDARY}>
                        <Announcement 
                            icon="door_sliding"
                            title="Zmena vchodu do fitness centra od 17.01.2022" 
                            date="16.01.2022">
                                <p>Od 17.01.2022 bude uzavretý zadný vchod a vstup do fitness centra bude možný opäť len cez hlavný vchod do budovy Kultúrno-spoločenské centrum Jedlíkova 7.</p>
                                <iframe 
                                src="https://www.google.com/maps/embed?pb=!4v1642348960339!6m8!1m7!1svg6E2ME9Yzy1BwxIVOwQXg!2m2!1d48.69832137665433!2d21.23330823118454!3f122.7910055697831!4f1.1432705465267503!5f1.94634212307073" 
                                width="800" 
                                height="600" 
                                style={{border:0, height: "500px", width: "100%", maxWidth:"800px"}} 
                                allowFullScreen={true} 
                                loading="lazy"
                                title="Google Street View"></iframe>
                        </Announcement>

                        <Announcement 
                            icon="schedule"
                            title="Zmena otváracích hodín od 13.01.2022" 
                            date="11.01.2022">
                                <DayOpeningHours day={Day.Thursday} oldTime={["15:00 - 22:00"]} times={["15:00 - 16:00", "17:00 - 22:00"]} ></DayOpeningHours>
                                <p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>

                        <Announcement 
                            icon="door_sliding"
                            title="Predĺženie zmeny vchodu do fitness centra od 10.01.2022 do odvolania" 
                            date="07.01.2022">
                                <p>Hlavný vchod do budovy zostavá nadalej až do odvolania uzavretý a vstup do fitness centra bude možný len cez zadný vchod.</p>
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
                            icon="schedule"
                            title="Zmena otváracích hodín od 10.01.2022" 
                            date="05.01.2022">
                                <p>
                                <DayOpeningHours day={Day.Monday} oldTime={["15:00 - 20:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Tuesday} oldTime={["15:00 - 20:00"]} times={["15:00 - 16:00", "17:00 - 22:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Wednesday} oldTime={["15:00 - 20:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Thursday} oldTime={["15:00 - 20:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Friday} oldTime={["15:00 - 20:00"]} times={["15:00 - 22:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Saturday} oldTime={["15:00 - 20:00"]} times={["16:00 - 21:00"]} ></DayOpeningHours>
                                <DayOpeningHours day={Day.Sunday} oldTime={["15:00 - 20:00"]} times={["16:00 - 21:00"]} ></DayOpeningHours>
                                </p><p><Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link></p>
                        </Announcement>
                    </Dropdown>
                    <Dropdown title="December, 2021" type={DropdownType.SECONDARY}>
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
                                <p>24.12.2021 (Piatok) - <WarningText>ZATVORENÉ</WarningText></p>
                                <p>25.12.2021 (Sobota) - <WarningText>ZATVORENÉ</WarningText></p>
                                <p>26.12.2021 (Nedeľa) - <WarningText>ZATVORENÉ</WarningText></p>
                                <p>31.12.2021 (Piatok) - <WarningText>ZATVORENÉ</WarningText></p>
                                <p>01.01.2022 (Sobota) - <WarningText>ZATVORENÉ</WarningText></p>
                                <p>06.01.2022 (Štvrtok) - 15:00 - 20:00</p>
                        </Announcement>
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
                                <p><WarningText>!!! ZMENY !!! :</WarningText></p>
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

const Warning = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 800px;
    padding: 30px;

    border: 3px solid ${props => props.theme.color.warning.normal};
    border-radius: 10px;
`;

export default OldAnnouncements;