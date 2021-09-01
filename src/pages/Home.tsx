import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Announcements from '../components/Announcements';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';

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
                
                <Announcements/>
            </div>
        );
    }
}


export default Home;