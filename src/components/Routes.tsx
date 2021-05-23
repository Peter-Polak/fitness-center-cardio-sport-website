import { Component } from "react";
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import OpeningHours from '../pages/OpeningHours';
import PriceList from '../pages/PriceList';
import ReservationSystem from '../pages/ReservationSystem';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Rules from '../pages/Rules';

interface IRoutesProps
{
    
}

interface IRoutesState
{
    
}

export interface Page
{
    name: string,
    path: string,
    page : any
}

export const Pages : {[page : string] : Page} = 
{
    home : 
    {
        name: "Domov",
        path: "/",
        page : Home
    },
    openingHours : 
    {
        name: "Otvaracie hodiny",
        path: "/otvaracie-hodiny",
        page : OpeningHours
    },
    priceList : 
    {
        name: "Cenník",
        path: "/cennik",
        page : PriceList
    },
    rules : 
    {
        name: "Vnútorný poriadok",
        path: "/vnutorny-poriadok",
        page : Rules
    },
    reservationSystem : 
    {
        name: "Rezervačný systém",
        path: "/rezervacny-system",
        page : ReservationSystem
    },
    gallery : 
    {
        name: "Galéria",
        path: "/galeria",
        page : Gallery
    },
    contact : 
    {
        name: "Kontakt",
        path: "/kontakt",
        page : Contact
    },
}

class Routes extends Component<IRoutesProps, IRoutesState>
{
    constructor(props : IRoutesProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const routes : Array<JSX.Element> = [];
    
        for(const key in Pages)
        {
            const page = Pages[key];
            
            routes.push(<Route path={page.path} render={ (props) => <page.page routeProps={props} />} exact key={page.path}/>)
        }
        
        return (
            <>
                {routes}
            </>
        );
    }
}

export default Routes;