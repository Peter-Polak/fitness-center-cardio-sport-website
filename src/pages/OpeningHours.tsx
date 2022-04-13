import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import DayOpeningHours from '../components/DayOpeningHours';
import MaterialIcon from '../components/MaterialIcon';
import WarningText from "../components/WarningText";
import { Day } from "../utilities/enums";
import { openingHours, texts } from "../Texts";

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
        const currentOpeningHours = openingHours[0];

        return (
            <div>
                <Heading heading="H1"><MaterialIcon icon="schedule" color="dark"/>{pageTexts.title}</Heading>
                
                <Content>
                    <Schedule>
                        <Valid>{pageTexts.validity} {currentOpeningHours.validity.from}</Valid>
                        <DayOpeningHours day={Day.Monday} times={currentOpeningHours.monday}/>
                        <DayOpeningHours day={Day.Tuesday} times={currentOpeningHours.tuesday}/>
                        <DayOpeningHours day={Day.Wednesday} times={currentOpeningHours.wednesday}/>
                        <DayOpeningHours day={Day.Thursday} times={currentOpeningHours.thursday}/>
                        <DayOpeningHours day={Day.Friday} times={currentOpeningHours.friday}/>
                        <DayOpeningHours day={Day.Saturday} times={currentOpeningHours.saturday}/>
                        <DayOpeningHours day={Day.Sunday} times={currentOpeningHours.sunday}/>
                    </Schedule>

                    <Heading heading="H2"><MaterialIcon icon="egg"/>Otváracie hodiny počas veľkonočných sviatkov</Heading>
                    <Schedule>
                        <DayOpeningHours day={Day.Friday} date="15.04.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Saturday} date="16.04.2022" times={["16:00 - 21:00"]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Sunday} date="17.04.2022" times={["16:00 - 21:00"]} ></DayOpeningHours>
                        <DayOpeningHours day={Day.Monday} date="18.04.2022" times={["15:00 - 22:00"]} ></DayOpeningHours>
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