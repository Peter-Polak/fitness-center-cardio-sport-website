import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';

interface IContactProps
{
    routeProps : RouteComponentProps<{}>
}

interface IContactState
{
    
}

class Contact extends Component<IContactProps, IContactState>
{
    constructor(props : IContactProps)
    {
        super(props);
        this.state = 
        {
            
        }
    }

    render() : JSX.Element
    {
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="contacts" color="dark"/> Kontakt</Heading>
                
                <Subsection>
                    <Heading heading="H2"><MaterialIcon icon="location_on"/> Adresa</Heading>
                    
                    <Content>
                        <div>
                            <p>Fitness centrum Cardio Sport</p>
                            <p>Jedlíková 7, 040 11 Košice</p>
                            <p>Telocvičňa T3</p>
                        </div>
                        
                        <Map 
                        title="map" 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1107.2138824996775!2d21.23425611908099!3d48.697581749903705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7614e658617eda5!2sCardio%20Sport!5e0!3m2!1sen!2ssk!4v1621204739105!5m2!1sen!2ssk" 
                        loading="lazy"></Map>
                    </Content>
                </Subsection>
                
                <Subsection>
                    <Heading heading="H2"><MaterialIcon icon="phone"/> Telefonický kontakt</Heading>
                    <div>+421 905 389 468</div>
                </Subsection>
                
                <Subsection>
                    <Heading heading="H2"><MaterialIcon icon="phone"/> Správca stránky</Heading>
                    <div>peter.polak.mail@gmail.com</div>
                </Subsection>
            </Container>
        );
    }
}

const Container = styled.div`
    text-align: center;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Subsection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 25px;
`;

const Map = styled.iframe`
    width: 100%;
    /* max-width: 300px; */
    height: 300px;
    
    border: 0;
`;

export default Contact;