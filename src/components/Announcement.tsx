import { Component } from "react";
import styled from 'styled-components';
import MaterialIcon from "./MaterialIcon";

interface IAnnouncementProps
{
    title : string
    date : string
    className? : string
}

interface IAnnouncementState
{
    
}

class Announcement extends Component<IAnnouncementProps, IAnnouncementState>
{
    constructor(props : IAnnouncementProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        const {title, date, children, className} = this.props;
        
        return (
            <Container className={className}>
                <h2>
                    <MaterialIcon icon="campaign"/>
                    {title}
                </h2>
                
                <Date>{date}</Date>
                
                <Content>{children}</Content>
            </Container>
        );
    }
}

const Container = styled.div`
    margin-bottom: 25px;
`;

const Date = styled.div`
    font-size: 0.7em;
    margin: 10px 0;
`;

const Content = styled.div`
    padding: 25px;
    border-radius: 5px;
    background-color: rgb(37, 37, 37);
`;


export default Announcement;