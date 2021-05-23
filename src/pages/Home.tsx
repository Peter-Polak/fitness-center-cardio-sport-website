import { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Announcement from '../components/Announcement';
import { Pages } from '../components/Routes';

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
                
                <Announcement 
                title="Zmena otváracích hodín od 01.07.2021 do 31.08.2021" 
                date="18.05.2021">
                    Sobota - zatvorené <Link to={Pages.openingHours.path}> → Aktuálne otváracie hodiny ←</Link>
                </Announcement>
                
                <HorizontalRule/>
                
                <Announcement 
                title="Zrušenie potreby sa vopred rezervovať" 
                date="13.05.2021">
                    Vážení návštevníci, oznamujeme Vám, že od pondelka 17.05.2021 rušíme rezervačný systém a opätovne začne platiť režim otváracích hodín. Tešíme sa na vás!
                </Announcement>
            </div>
        );
    }
}

const HorizontalRule = styled.hr`
    border-color: ${props => props.theme.color.primary.normal};
`;

export default Home;