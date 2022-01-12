import { Component } from 'react'
import styled from 'styled-components';

interface Time
{ 
    hours : number
    minutes : number
}

export enum Day
{ 
    MONDAY = "Pondelok",
    TUESDAY = "Utorok",
    WEDNESDAY = "Streda",
    THURSDAY = "Štvrtok",
    FRIDAY = "Piatok",
    SATURDAY = "Sobota",
    SUNDAY = "Nedeľa"
}

interface IAnnouncementProps
{
    day : Day
    // times : Array<{ from : Time, to : Time }>
    times : Array<string>
}

interface IState
{
    
}

class DayOpeningHours extends Component<IAnnouncementProps, IState>
{
    state = {}

    render()
    {
        let timeString : string = "";
        
        // for(const time of this.props.times)
        // {
        //     timeString += `${time.from.hours}:${time.from.minutes} - ${time.to.hours}:${time.to.minutes}`;
        // }

        this.props.times.forEach(
            (time, index, array) =>
            {
                timeString += time;
                if(index < array.length - 1) timeString += ", ";
            }
        );

        return (
            <Container>
                <DayText>{this.props.day.toString()}</DayText><TimeText>{timeString}</TimeText>
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    align-items: center;

    position: relative;
    padding: 15px 0;

    &:not(:last-of-type):after
    {
        content: "";
        
        position: absolute;
        left: 0;
        bottom: 0;
        
        height: 1px;
        width: 100%;
        
        background: ${props => props.theme.color.primary.normal};
    }
`;

const DayText = styled.span`
    display: inline-block;
    width: 100px;

    font-size: 15px;
    font-weight: bold;
`;

const TimeText = styled.span`
`;

export default DayOpeningHours;
