import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import { Reservation, Sessions, getSessions, postReservation } from "../restApi"
import { getTimestamp } from '../helpers';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Field from '../components/Field';
import CheckboxGroup from "../components/CheckboxGroup";
import LoadingSceen from "../components/LoadingSceen";

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
    showLoadingScreen : boolean
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
            checkboxStates : {},
            showLoadingScreen : true
        }
        
        this.updateSessions();
        
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
    
    async submit()
    {
        const { name, surname, emailAddress, checkboxStates } = this.state;
        
        let reservation : Reservation = 
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
        
        this.setState({showLoadingScreen : true});
        await postReservation(reservation);
        
        this.updateSessions();
        this.setState({showLoadingScreen : false});
    }
    
    updateSessions()
    {
        this.setState({showLoadingScreen : true});
        
        getSessions().then(
            (sessions : Sessions) =>
            {
                let checkboxStates : {[date : string] : Array<boolean>} = {};
        
                for(const date in sessions)
                {
                    checkboxStates[date] = sessions[date].free.map(session => false);
                }
                
                this.setState({sessions : sessions, checkboxStates : checkboxStates, showLoadingScreen : false});
            }
        );
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
            
            checkboxGroups.push(<StyledCheckboxGroup name={`${this.state.sessions[key].day}, ${key}`} options={options} checkboxStates={this.state.checkboxStates[key]} handleChange={(checkboxStates) => this.handleCheckboxGroupChange(key, checkboxStates)} key={key}/>)
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
                {this.state.showLoadingScreen && <LoadingSceen/>}
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