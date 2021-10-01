import { Component } from "react";
import styled from 'styled-components';
import Heading from "./Heading";
import MaterialIcon from "./MaterialIcon";

interface IAnnouncementProps
{
    icon? : string
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
        const { icon, title, date, children, className } = this.props;
        
        return (
            <Container className={className}>
                <Heading heading="H2"><MaterialIcon icon={icon === undefined ? "campaign" : icon}/> {title}</Heading>
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