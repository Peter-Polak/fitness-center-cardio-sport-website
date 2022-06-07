import { Component } from 'react'
import styled from 'styled-components';
import { getTranslatedDay, texts } from '../Texts';
import { Day } from '../utilities/enums';
import WarningText from './WarningText';

interface IAnnouncementProps
{
    day : Day
    // times : Array<{ from : Time, to : Time }>
    times : Array<string>
    oldTime? : Array<string>
    date? : string
}

interface IState
{
    
}

class DayOpeningHours extends Component<IAnnouncementProps, IState>
{
    state = {}

    render()
    {
        const { times, oldTime, day, date } = this.props;
        let timeString : string = "";
        let oldTimeString : string = "";
        
        // for(const time of this.props.times)
        // {
        //     timeString += `${time.from.hours}:${time.from.minutes} - ${time.to.hours}:${time.to.minutes}`;
        // }

        if(times.length > 0)
        {
            times.forEach(
                (time, index, array) =>
                {
                    timeString += time;
                    if(index < array.length - 1) timeString += ", ";
                }
            );
        }
        // else
        // {
        //     timeString = texts.pages.openingHours.closed;
        // }
        

        if(oldTime)
        {
            if(oldTime.length > 0)
            {
                oldTime.forEach(
                    (time, index, array) =>
                    {
                        oldTimeString += time;
                        if(index < array.length - 1) oldTimeString += ", ";
                    }
                );
            }
            else
            {
                oldTimeString = texts.pages.openingHours.closed;
            }
            
        }

        return (
            <Container>
                {date ? <Date>{date}:</Date> : null}
                <DayText>{getTranslatedDay(day)}</DayText>
                <TimeText>
                    {oldTime ? <><del>{oldTimeString}</del> → </> : ""}
                    {timeString != "" ? timeString : <WarningText>{texts.pages.openingHours.closed.toUpperCase()}</WarningText>}
                </TimeText>
            </Container>
        )
    }
}

const Container = styled.span`
    display: flex;
    align-items: center;

    position: relative;
    padding: 15px 0;
    
    width: 100%;

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
    width: 120px;

    font-size: 15px;
    font-weight: bold;
`;

const TimeText = styled.span`
`;

const Date = styled.span`
    /* font-size: 11px; */
    margin-right: 10px;
`;

export default DayOpeningHours;
