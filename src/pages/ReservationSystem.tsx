import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Field from '../components/Field';
import CheckboxGroup from "../components/CheckboxGroup";

interface IReservationSystemProps
{
    routeProps : RouteComponentProps<{}>
}

interface IReservationSystemState
{
    name : string
    surname : string
    emailAddress : string
}

class ReservationSystem extends Component<IReservationSystemProps, IReservationSystemState>
{
    constructor(props : IReservationSystemProps)
    {
        super(props);
        this.state = 
        {
            name : "", 
            surname : "", 
            emailAddress : ""
        }
    }
    
    handleNameChange(value : string)
    {
        this.setState({ name : value });
    }
    
    handleSurnameChange(value : string)
    {
        this.setState({ surname : value });
    }
    
    handleEmailAddressChange(value : string)
    {
        this.setState({ emailAddress : value });
    }
    
    submit()
    {
        // const { name, surname, emailAddress } = this.state;
        
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress } = this.state;
        
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Rezervačný systém</Heading>
                
                {/* <MaterialIcon icon="engineering" size="200px"/> */}
                <Identity>
                    <IdentityField name="Meno" type="text" value={name} handleChange={(event) => this.handleNameChange(event.target.value)} required={true}/>
                    <IdentityField name="Priezvisko" type="text" value={surname} handleChange={(event) => this.handleSurnameChange(event.target.value)} required={true}/>
                    <Field name="E-mailová adresa" type="email" value={emailAddress} handleChange={(event) => this.handleEmailAddressChange(event.target.value)}/>
                </Identity>
                
                <div>
                    <CheckboxGroup name="Pondelok, 01.01.2021" options={["15:00 - 16:30", "16:30 - 18:30", "18:30 - 20:00", "20:00 - 22:00"]} handleChange={console.log}/>
                </div>
            </Container>
        );
    }
}

const Container = styled.div`
    text-align: center;
`;

const Identity = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const IdentityField = styled(Field)`
    flex: 1;
`;

export default ReservationSystem;