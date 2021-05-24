import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import { Sessions, getTimestamp } from '../helpers';

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
    sessions : Sessions
    name : string
    surname : string
    emailAddress : string
    checkboxStates : {[date : string] : Array<boolean>}
}

class ReservationSystem extends Component<IReservationSystemProps, IReservationSystemState>
{
    constructor(props : IReservationSystemProps)
    {
        super(props);
        
        this.state = 
        {
            sessions : {},
            name : "", 
            surname : "", 
            emailAddress : "",
            checkboxStates : {}
        }
        
        this.getSessions().then(
            (sessions : Sessions) =>
            {
                let checkboxStates : {[date : string] : Array<boolean>} = {};
        
                for(const date in sessions)
                {
                    checkboxStates[date] = sessions[date].free.map(session => false);
                }
                
                this.setState({sessions : sessions, checkboxStates : checkboxStates});
            }
        );
        
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
        
        let reservation = 
        {
            timestamp : getTimestamp(),
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
                        let session = this.state.sessions[key].free[index];
                        if(reservation.sessions !== "") reservation.sessions += ", ";
                        reservation.sessions += `${key} ${session.start.string} - ${session.end.string}`;
                    }
                }
            );
        }
        
        console.log(reservation);
        
        // const webAppUrl = "https://script.google.com/macros/s/AKfycbzlOl57hBNV5fF8g_waOrjOscdaQm4oisdXID2n0hPI7-yjYBrEKZGQ333zZpYUyskIBw/exec";
        const webAppUrl = "https://script.google.com/macros/s/AKfycbxpAWLK9K4q22SEUAa3Ei45AsEE3zAtnH_b8B2W-dDDbP5kbPOwO_oTeoyHqt9YaWVzpw/exec";
        const query = `?timestamp=${reservation.timestamp}&name=${reservation.name}&surname=${reservation.surname}&emailAddress=${reservation.emailAddress}&sessions=${reservation.sessions}`;
        const url = webAppUrl + query;
        fetch(
            url,
            {
                method: 'POST',
            }
        )
        .then(async response => console.log(await response.json()));
    }
    
    async getSessions() : Promise<Sessions>
    {
        // const webAppUrl = "https://script.google.com/macros/s/AKfycbzlOl57hBNV5fF8g_waOrjOscdaQm4oisdXID2n0hPI7-yjYBrEKZGQ333zZpYUyskIBw/exec";
        const webAppUrl = "https://script.google.com/macros/s/AKfycbxpAWLK9K4q22SEUAa3Ei45AsEE3zAtnH_b8B2W-dDDbP5kbPOwO_oTeoyHqt9YaWVzpw/exec";
        
        const response = await fetch(
            webAppUrl,
            {
                method: 'GET',
            }
        );
        
        const sessions = response.json();
        
        return sessions;
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress, checkboxStates } = this.state;
        
        const checkboxGroups : Array<JSX.Element> = [];
        for(const key in checkboxStates)
        {
            const options = this.state.sessions[key].free.map(
                session => 
                `${session.start.string} - ${session.end.string} (${session.capacity - session.reserved}/${session.capacity})`
            );
            
            checkboxGroups.push(<StyledCheckboxGroup name={`${this.state.sessions[key].day}, ${key}`} options={options} handleChange={(checkboxStates) => this.handleCheckboxGroupChange(key, checkboxStates)} key={key}/>)
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
                
                <SessionsContainer>
                    {checkboxGroups}
                </SessionsContainer>
                
                <SubmitButton onClick={this.submit}>Odoslať</SubmitButton>
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
    
    margin: 10px 0;
`;

const IdentityField = styled(Field)`
    flex: 1;
`;

const SessionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    margin: 10px 0;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    
    color: ${props => props.theme.color.text};
    font-family: "Bebas Neue";
    font-size: 24px;
    letter-spacing: 1px;
    background-color: ${props => props.theme.color.succes.normal};;
`;

const StyledCheckboxGroup = styled(CheckboxGroup)`
    margin-right: 30px; 
    
    &:last-of-type
    {
        margin: 0;
    }
`;

export default ReservationSystem;