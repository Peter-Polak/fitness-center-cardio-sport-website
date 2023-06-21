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
                    <HoursContainer>
                        {
                            openingHours.map(element => {
                                return (
                                <Schedule>
                                    <Valid>{pageTexts.validity.from} {element.validity.from}{element.validity.to !== "" ? ` ${pageTexts.validity.to} ${element.validity.to}` : null}</Valid>
                                    <DayOpeningHours day={Day.Monday} times={element.monday}/>
                                    <DayOpeningHours day={Day.Tuesday} times={element.tuesday}/>
                                    <DayOpeningHours day={Day.Wednesday} times={element.wednesday}/>
                                    <DayOpeningHours day={Day.Thursday} times={element.thursday}/>
                                    <DayOpeningHours day={Day.Friday} times={element.friday}/>
                                    <DayOpeningHours day={Day.Saturday} times={element.saturday}/>
                                    <DayOpeningHours day={Day.Sunday} times={element.sunday}/>
                                </Schedule>
                            )})
                        }

                        {/* <Schedule>
                            <Heading heading="H2"><MaterialIcon icon="egg" color="theme"/>Otváracie hodiny počas sviatkov</Heading>
                            <DayOpeningHours day={Day.Friday} date="07.04.2023" times={["15:00 - 22:00"]} ></DayOpeningHours>
                        </Schedule> */}
                    </HoursContainer>
                    
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
    margin-top: 30px;
`;

const HoursContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Schedule = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 0 30px 30px;
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