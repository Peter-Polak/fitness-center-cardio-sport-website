import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import DayOpeningHours from '../components/DayOpeningHours';
import MaterialIcon from '../components/MaterialIcon';
import WarningText from "../components/WarningText";
import { Day } from "../utilities/enums";
import { texts } from "../Texts";

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
        const pageTexts = texts.pages.openingHours;

        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="schedule" color="dark"/>{pageTexts.title}</Heading>
                
                <Content>
                    <Schedule>
                        <Valid>{pageTexts.validity} 14.02.2022</Valid>
                        <DayOpeningHours day={Day.Monday} times={["15:00 - 22:00"]}/>
                        <DayOpeningHours day={Day.Tuesday} times={["15:00 - 16:00", "17:00 - 22:00"]}/>
                        <DayOpeningHours day={Day.Wednesday} times={["15:00 - 22:00"]}/>
                        <DayOpeningHours day={Day.Thursday} times={["15:00 - 22:00"]}/>
                        <DayOpeningHours day={Day.Friday} times={["15:00 - 22:00"]}/>
                        <DayOpeningHours day={Day.Saturday} times={["16:00 - 21:00"]}/>
                        <DayOpeningHours day={Day.Sunday} times={["16:00 - 21:00"]}/>
                    </Schedule>
                    
                    <Warning>
                        <WarningText>!!! {texts.warning} !!!</WarningText>
                        <p>{pageTexts.spinningWarning}</p>
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

const Schedule = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;
    padding: 20px 30px;

    border: 2px solid ${props => props.theme.color.primary.normal};
    border-radius: 10px;
`;

const Valid = styled.p`
    font-size: 0.8em;
`

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