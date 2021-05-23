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
    checkboxStates : {[date : string] : Array<boolean>}
}

class ReservationSystem extends Component<IReservationSystemProps, IReservationSystemState>
{
    sessions : {[date : string] : Array<string>} = 
    {
        "Pondelok, 01.01.2021" : ["15:00 - 16:30", "16:30 - 18:30", "18:30 - 20:00", "20:00 - 22:00"]
    };
    
    constructor(props : IReservationSystemProps)
    {
        super(props);
        
        let checkboxStates : {[date : string] : Array<boolean>} = {};
        
        for(const key in this.sessions)
        {
            checkboxStates[key] = this.sessions[key].map(session => false);
        }
        
        this.state = 
        {
            name : "", 
            surname : "", 
            emailAddress : "",
            checkboxStates : checkboxStates
        }
    }
    
    handleFieldChange(key : "name" | "surname" | "emailAddress" , value : string)
    {
        const stateKey = key;
        //@ts-ignore
        this.setState({ [stateKey] : value });
    }
    
    handleCheckboxGroupChange(key : string , values : Array<boolean>)
    {
        let checkboxStates = this.state.checkboxStates;
        checkboxStates[key] = values;
        
        this.setState({ checkboxStates : checkboxStates });
    }
    
    submit()
    {
        // const { name, surname, emailAddress } = this.state;
        
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress, checkboxStates } = this.state;
        
        const checkboxGroups : Array<JSX.Element> = [];
        for(const key in checkboxStates)
        {
            const options = this.sessions[key];
            checkboxGroups.push(<CheckboxGroup name={key} options={options} handleChange={(checkboxStates) => this.handleCheckboxGroupChange(key, checkboxStates)}/>)
        }
        
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Rezervačný systém</Heading>
                
                {/* <MaterialIcon icon="engineering" size="200px"/> */}
                <Identity>
                    <IdentityField name="Meno" type="text" value={name} handleChange={(event) => this.handleFieldChange("name", event.target.value)} required={true}/>
                    <IdentityField name="Priezvisko" type="text" value={surname} handleChange={(event) => this.handleFieldChange("surname", event.target.value)} required={true}/>
                </Identity>
                
                <Field name="E-mailová adresa" type="email" value={emailAddress} handleChange={(event) => this.handleFieldChange("emailAddress", event.target.value)}/>
                
                <div>
                    {checkboxGroups}
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
    margin-bottom: 50px;
`;

const IdentityField = styled(Field)`
    flex: 1;
`;

export default ReservationSystem;