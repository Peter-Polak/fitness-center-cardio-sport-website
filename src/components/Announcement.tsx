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
    position: relative;
    margin-bottom: 50px;
    
    &:not(:last-of-type):after
    {
        content: "";
        
        position: absolute;
        left: 0;
        bottom: -30px;
        
        height: 2px;
        width: 100%;
        
        background: ${props => props.theme.color.primary.normal};
    }
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