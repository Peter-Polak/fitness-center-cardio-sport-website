import { Component } from "react";
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
import OpeningHours from '../pages/OpeningHours';
import PriceList from '../pages/PriceList';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import Rules from '../pages/Rules';
// import ReservationForm from '../pages/ReservationForm';
// import SessionOverview from "../pages/SessionOverview";
// import ReservationsOverview from "../pages/ReservationsOverview";

interface IRoutesProps
{
    
}

interface IRoutesState
{
    
}

export interface ISitemap
{
    [route : string] : IRoute
}

export interface IRoute
{
    name: string,
    path: string,
    component? : any
    routes : Array<IRoute> 
}

export const Sitemap : ISitemap = 
{
    home : 
    {
        name: "Domov",
        path: "/",
        component : Home,
        routes : []
    },
    openingHours : 
    {
        name: "Otváracie hodiny",
        path: "/otvaracie-hodiny",
        component : OpeningHours,
        routes : []
    },
    priceList : 
    {
        name: "Cenník",
        path: "/cennik",
        component : PriceList,
        routes : []
    },
    rules : 
    {
        name: "Vnútorný poriadok",
        path: "/vnutorny-poriadok",
        component : Rules,
        routes : []
    },
    // reservationSystem : 
    // {
    //     name: "Rezervačný systém",
    //     path: "/rezervacny-system",
    //     component : ReservationForm,
    //     routes : 
    //     [
    //         {
    //             name: "Termíny",
    //             path: "/rezervacny-system/terminy",
    //             component : SessionOverview,
    //             routes : []
    //         },
    //         {
    //             name: "Formulár",
    //             path: "/rezervacny-system/formular",
    //             component : ReservationForm,
    //             routes : []
    //         },
    //         {
    //             name: "Prehľad rezervacií",
    //             path: "/rezervacny-system/prehlad-rezervacii",
    //             component : ReservationsOverview,
    //             routes : []
    //         }
    //     ]
    // },
    gallery : 
    {
        name: "Galéria",
        path: "/galeria",
        component : Gallery,
        routes : []
    },
    contact : 
    {
        name: "Kontakt",
        path: "/kontakt",
        component : Contact,
        routes : []
    }
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
        const routeComponents : Array<JSX.Element> = [];
    
        for(const key in Sitemap)
        {
            const route = Sitemap[key];
            if(route.component) routeComponents.push(<Route path={route.path} render={ (props) => <route.component routeProps={props} />} exact key={route.path}/>);
            
            for(const subroute of route.routes)
            {
                if(subroute.component) routeComponents.push(<Route path={subroute.path} render={ (props) => <subroute.component routeProps={props} />} exact key={subroute.path}/>);
            }
        }
        
        return (
            <>
                {routeComponents}
            </>
        );
    }
}

export default Routes;