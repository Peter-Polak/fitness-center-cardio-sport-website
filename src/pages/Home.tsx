import { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Announcement from '../components/Announcement';
import { Sitemap } from '../components/Routes';
import Dropdown, { DropdownType } from '../components/Dropdown';

interface IHomeProps
{
    routeProps : RouteComponentProps<{}>
}

interface IHomeState
{
    
}

class Home extends Component<IHomeProps, IHomeState>
{
    constructor(props : IHomeProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="home" color="dark"/> Domov</Heading>
                
                <div>
                    <Announcement 
                    title="Zmena otváracích hodín od 01.07.2021 do 31.08.2021 (Úprava)" 
                    date="02.07.2021">
                        Sobota: <del>16:00 - 21:00</del> → 17:00 - 20:00 <Link to={Sitemap.openingHours.path}> → Aktuálne otváracie hodiny ←</Link>
                    </Announcement>
                    
                    <Announcement 
                    title="Otváracie hodiny počas štátneho sviatku" 
                    date="29.06.2021">
                        V pondelok 05.07.2021 (štátny sviatok) máme otvorené od 15:00 do 22:00. Tešíme sa na vás!
                    </Announcement>
                </div>
                
                <Dropdown title="Staré oznamy" type={DropdownType.PRIMARY}>
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
            </div>
        );
    }
}

export default Home;