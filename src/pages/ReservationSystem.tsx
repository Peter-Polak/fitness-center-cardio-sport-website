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
import Checkbox from "../components/Checkbox";

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
    rememberUser : boolean
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
            ...this.getUserInfo(),
            checkboxStates : {},
            showLoadingScreen : true
        }
        
        this.submit = this.submit.bind(this);
        this.rememberUserhandler = this.rememberUserhandler.bind(this);
    }
    
    componentDidMount()
    {
        this.updateSessions();
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
        const { name, surname, emailAddress, checkboxStates, rememberUser } = this.state;
        
        rememberUser ? this.setUserInfo(name, surname, emailAddress) : this.deleteUserInfo();
        
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
        
        this.resetForm();
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
    
    rememberUserhandler(event : any)
    {
        const newValue = event.target.checked;
        this.setState({ rememberUser : newValue });
    }
    
    resetForm()
    {
        this.setState({ ...this.getUserInfo(), showLoadingScreen : false});
        
        this.updateSessions();
    }
    
    getUserInfo()
    {
        let user = 
        {
            name : this.getLocalStorageItem("name"),
            surname : this.getLocalStorageItem("surname"),
            emailAddress : this.getLocalStorageItem("emailAddres"),
            rememberUser : false
        }
        
        if(user.name !== "" && user.surname !== "") user.rememberUser = true;
        
        return user;
    }
    
    getLocalStorageItem(key : string)
    {
        let item = window.localStorage.getItem(key);
        return item === null ? "" : item;
    }
    
    deleteUserInfo()
    {
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("surname");
        window.localStorage.removeItem("emailAddres");
        window.localStorage.removeItem("remeberUser");
    }
    
    setUserInfo(name : string, surname : string, emailAddress : string)
    {
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("surname", surname);
        window.localStorage.setItem("emailAddres", emailAddress);
        window.localStorage.setItem("remeberUser", "true");
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress, checkboxStates, rememberUser, sessions } = this.state;
        
        const checkboxGroups : Array<JSX.Element> = [];
        for(const key in sessions)
        {
            const options = sessions[key].free.map(
                session => 
                `${session.start.string} - ${session.end.string} (${session.capacity - session.reserved}/${session.capacity})`
            );
            
            checkboxGroups.push(<StyledCheckboxGroup name={`${this.state.sessions[key].day}, ${key}`} options={options} checkboxStates={checkboxStates[key]} handleChange={(checkboxStates) => this.handleCheckboxGroupChange(key, checkboxStates)} key={key}/>)
        }
        
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Rezervačný systém</Heading>
                
                <Content>
                    {this.state.showLoadingScreen && <StyledLoadingSceen fullscreen={false}/>}
                    
                    <Heading heading="H2"><MaterialIcon icon="person"/> Osobné údaje</Heading>
                    <Identity>
                        <IdentityField name="Meno" type="text" value={name} handleChange={(event) => this.handleFieldChange("name", event.target.value)} required={true}/>
                        <IdentityField name="Priezvisko" type="text" value={surname} handleChange={(event) => this.handleFieldChange("surname", event.target.value)} required={true}/>
                    </Identity>
                    
                    <Field name="E-mailová adresa" type="email" value={emailAddress} handleChange={(event) => this.handleFieldChange("emailAddress", event.target.value)}/>
                    
                    <Checkbox name="Zapamätať si údaje" checked={rememberUser} handleChange={this.rememberUserhandler}/>
                    
                    <Heading heading="H2"><MaterialIcon icon="date_range"/> Voľné termíny</Heading>
                    <Details><MaterialIcon icon="info"/>Tip: Viete si spraviť rezerváciu na viacero termínov naraz vyplnením jedného formulára. Stačí zaškrtnúť všetky políčka/termíny, o ktoré máte záujem.</Details>
                    <SessionsContainer>
                        {checkboxGroups.length > 0 ? checkboxGroups : <p>Nie sú žiadne voľné termíny.</p>}
                    </SessionsContainer>
                    
                    <SubmitButton onClick={this.submit} disabled={checkboxGroups.length === 0}>Odoslať</SubmitButton>
                </Content>
            </Container>
        );
    }
}

const Container = styled.div`
    text-align: center;
`;

const Content = styled.div`
    position: relative;
`;

const StyledLoadingSceen = styled(LoadingSceen)`
    left: -1px; // Neccessary because fields are poking out on the lft a little bit on smaller screens for unknown reason.
`;

const Identity = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
    margin: 10px 0;
`;

const IdentityField = styled(Field)`
    flex: 1;
    min-width: 180px;
`;

const SessionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    margin: 30px 0;
`;

const SubmitButton = styled.button`
    padding: 10px 40px;
    
    color: ${props => props.theme.color.text};
    font-family: "Bebas Neue";
    font-size: 24px;
    letter-spacing: 1px;
    background-color: ${props => props.theme.color.succes.normal};
    
    &:disabled
    {
        opacity: 25%;
        cursor: not-allowed;
    }
`;

const StyledCheckboxGroup = styled(CheckboxGroup)`
    margin-right: 30px; 
    
    &:last-of-type
    {
        margin: 0;
    }
`;

const Details = styled.div`
    font-size: 12px;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default ReservationSystem;