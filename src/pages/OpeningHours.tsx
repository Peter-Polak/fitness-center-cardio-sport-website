import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';

interface IOpeningHoursProps
{
    routeProps : RouteComponentProps<{}>
}

interface IOpeningHoursState
{
    
}

class OpeningHours extends Component<IOpeningHoursProps, IOpeningHoursState>
{
    constructor(props : IOpeningHoursProps)
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
                <Heading heading="H1"><MaterialIcon icon="schedule" color="dark"/> Otváracie hodiny</Heading>
                
                <Content>
                    <p>Platné od 01.07.2021 do 31.08.2021</p>
                    
                    <Hours>
                        <p>Pondelok: 15:00 - 22:00</p>
                        <p>Utorok: 15:00 - 22:00</p>
                        <p>Streda: 15:00 - 22:00</p>
                        <p>Štvrtok: 15:00 - 22:00</p>
                        <p>Piatok : 15:00 - 22:00</p>
                        <p>Sobota: <Warning>ZATVORENÉ</Warning></p>
                        <p>Nedeľa: 16:00 - 21:00</p>
                    </Hours>
                    
                    
                    <Warning>!!! UPOZORNENIE !!!</Warning>
                    <p>
                        V Utorok a Štvrtok o 17:30 - 18:30 sa v zadnej časti posilňovne (kde sú vzpieračské pódia, stojan, klietka, leg press a rotopédy) konajú hodiny spinningu. 
                        Počas tejto doby je zadná časť vyhradená iba pre spinning a iným návštevníkom nedostupná a uzavretá!
                    </p>
                </Content>
            </div>
        );
    }
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Hours = styled.div`
    margin: 10px 0 30px 0;
`;

const Warning = styled.span`
    color: ${props => props.theme.color.warning.normal};
    font-size: 1.2em;
`;

export default OpeningHours;