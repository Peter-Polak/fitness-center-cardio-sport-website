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
    days : {[date : string] : { day : string, sessions : Array<{time : string, capacity : number, reserved : number}>} } = 
    {
        "01.01.2021" : 
        {
            day: "Pondelok",
            sessions : 
            [
                {
                    time : "15:00 - 16:30", 
                    capacity: 6, 
                    reserved : 4
                }, 
                {
                    time : "16:30 - 18:30", 
                    capacity: 6, 
                    reserved : 0
                },
                {
                    time : "18:30 - 20:00", 
                    capacity: 6, 
                    reserved : 2
                },
                {
                    time : "20:00 - 22:00", 
                    capacity: 6, 
                    reserved : 1
                }
            ]
        },
        "02.01.2021" : 
        {
            day: "Utorok",
            sessions : 
            [
                {
                    time : "15:00 - 16:30", 
                    capacity: 6, 
                    reserved : 6
                }, 
                {
                    time : "16:30 - 18:30", 
                    capacity: 6, 
                    reserved : 4
                },
                {
                    time : "18:30 - 20:00", 
                    capacity: 6, 
                    reserved : 5
                },
                {
                    time : "20:00 - 22:00", 
                    capacity: 6, 
                    reserved : 0
                }
            ]
        }
    };
    
    constructor(props : IReservationSystemProps)
    {
        super(props);
        
        let checkboxStates : {[date : string] : Array<boolean>} = {};
        
        for(const date in this.days)
        {
            checkboxStates[date] = this.days[date].sessions.map(session => false);
        }
        
        this.state = 
        {
            name : "", 
            surname : "", 
            emailAddress : "",
            checkboxStates : checkboxStates
        }
        
        this.submit = this.submit.bind(this);
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
        const { name, surname, emailAddress, checkboxStates } = this.state;
        
        let response = 
        {
            name : name, 
            surname : surname,
            emailAddress : emailAddress,
            sessions : ""
        };
        
        for(const key in checkboxStates)
        {
            let sessions = checkboxStates[key];
            
            sessions.forEach(
                (isChecked, index) =>
                {
                    if(isChecked) 
                    {
                        if(response.sessions !== "") response.sessions += ", ";
                        response.sessions += `${key} ${this.days[key].sessions[index].time}`;
                    }
                }
            );
        }
        
        console.log(response);
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress, checkboxStates } = this.state;
        
        const checkboxGroups : Array<JSX.Element> = [];
        for(const key in checkboxStates)
        {
            
            const options = this.days[key].sessions.map(session => `${session.time} (${session.capacity - session.reserved}/${session.capacity})`);
            
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
                
                <button onClick={this.submit}>Submit</button>
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