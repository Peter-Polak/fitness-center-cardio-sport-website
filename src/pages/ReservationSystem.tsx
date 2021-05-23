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

    submit()
    {
        // const { name, surname, emailAddress } = this.state;
        
    }
    
    render() : JSX.Element
    {
        // const { name, surname, emailAddress } = this.state;
        
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Rezervačný systém</Heading>
                
                {/* <MaterialIcon icon="engineering" size="200px"/> */}
                <Identity>
                    <IdentityField name="Meno" type="text" handleChange={console.log} required={true}/>
                    <IdentityField name="Priezvisko" type="text" handleChange={console.log} required={true}/>
                    <Field name="E-mailová adresa" type="email" handleChange={console.log}/>
                </Identity>
                
                <div>
                    <CheckboxGroup name="Test" values={["text1", "test2", "test3", "test4"]} handleChange={console.log}/>
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