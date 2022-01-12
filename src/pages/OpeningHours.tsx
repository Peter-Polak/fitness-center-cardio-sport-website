import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import DayOpeningHours, { Day } from '../components/DayOpeningHours';
import MaterialIcon from '../components/MaterialIcon';
import WarningText from "../components/WarningText";

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
                    <Schedule>
                        <p>Platné od 10.01.2022</p>
                        <Days>
                            <DayOpeningHours day={Day.MONDAY} times={["15:00 - 22:00"]}></DayOpeningHours>
                            <DayOpeningHours day={Day.TUESDAY} times={["15:00 - 16:00, 17:00 - 22:00"]}></DayOpeningHours>
                            <DayOpeningHours day={Day.WEDNESDAY} times={["15:00 - 22:00"]}></DayOpeningHours>
                            <DayOpeningHours day={Day.THURSDAY} times={["15:00 - 16:00, 17:00 - 22:00"]}></DayOpeningHours>
                            <DayOpeningHours day={Day.FRIDAY} times={["15:00 - 22:00"]}></DayOpeningHours>
                            <DayOpeningHours day={Day.SATURDAY} times={["16:00 - 21:00"]}></DayOpeningHours>
                            <DayOpeningHours day={Day.SUNDAY} times={["16:00 - 21:00"]}></DayOpeningHours>
                        </Days>
                    </Schedule>
                    
                    <Warning>
                        <WarningText>!!! UPOZORNENIE !!!</WarningText>
                        <p>
                            V Utorok a Štvrtok o 17:30 - 18:30 sa v zadnej časti posilňovne (kde sú vzpieračské pódia, stojan, klietka, leg press a rotopédy) konajú hodiny spinningu. 
                            Počas tejto doby je zadná časť vyhradená iba pre spinning a iným návštevníkom nedostupná a uzavretá!
                        </p>
                    </Warning>
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

const Days = styled.div`
    margin: 10px 0 30px 0;
`;

const Schedule = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;
    padding: 30px;

    border: 3px solid ${props => props.theme.color.primary.normal};
    border-radius: 10px;
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

export default OpeningHours;