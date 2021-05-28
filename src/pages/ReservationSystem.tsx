import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import { Reservation, Sessions, getSessions, postReservation } from "../restApi"
import { getTimestamp , getUserInfo, setUserInfo, deleteUserInfo } from '../helpers';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Field from '../components/Field';
import CheckboxGroup from "../components/CheckboxGroup";
import LoadingSceen from "../components/LoadingSceen";
import Checkbox from "../components/Checkbox";
import Button, { ButtonType } from "../components/Button";
import { getReservationResponseComponent, ReservationValidity } from "../Reservation";

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
    showStatusScreen : boolean
}

class ReservationSystem extends Component<IReservationSystemProps, IReservationSystemState>
{
    reservationResponse : ReservationValidity | undefined = undefined;
    
    constructor(props : IReservationSystemProps)
    {
        super(props);
        
        this.state = 
        {
            sessions : {},
            ...getUserInfo(),
            checkboxStates : {},
            showLoadingScreen : true,
            showStatusScreen : false
        }
        
        this.submit = this.submit.bind(this);
        this.rememberUserhandler = this.rememberUserhandler.bind(this);
        this.resetForm = this.resetForm.bind(this);
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
        
        rememberUser ? setUserInfo(name, surname, emailAddress) : deleteUserInfo();
        
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
        this.reservationResponse = await postReservation(reservation);
        this.setState({showLoadingScreen : false, showStatusScreen: true});
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
                
                this.setState(
                    {
                        sessions : sessions, 
                        checkboxStates : checkboxStates, 
                        showLoadingScreen : false
                    }
                );
            }
        ).catch(
            () =>
            {
                this.setState({ showLoadingScreen : false, showStatusScreen : true });
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
        this.setState({ ...getUserInfo(), showStatusScreen : false, showLoadingScreen : false});
        
        this.updateSessions();
    }
    
    getCheckBoxGroups()
    {
        const { checkboxStates, sessions } = this.state;
        const checkboxGroups : Array<JSX.Element> = [];
        
        for(const key in sessions)
        {
            const options = sessions[key].free.map(
                session => 
                `${session.start.string} - ${session.end.string} (${session.capacity - session.reserved}/${session.capacity})`
            );
            const checkboxGroupName = `${this.state.sessions[key].day}, ${key}`;
            
            checkboxGroups.push(
                <StyledCheckboxGroup 
                name={checkboxGroupName} 
                options={options} 
                checkboxStates={checkboxStates[key]} 
                handleChange={(checkboxStates) => this.handleCheckboxGroupChange(key, checkboxStates)} 
                key={key}/>
            )
        }
        
        return checkboxGroups;
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress, rememberUser, showLoadingScreen, showStatusScreen } = this.state;
        
        const checkboxGroups : Array<JSX.Element> = this.getCheckBoxGroups();
        
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Rezervačný systém</Heading>
                
                <Content>
                    {showLoadingScreen && <StyledLoadingSceen fullscreen={false}/>}
                    {showStatusScreen && this.reservationResponse && getReservationResponseComponent(this.reservationResponse, this.resetForm)}
                    
                    <Heading heading="H2"><MaterialIcon icon="person"/> Osobné údaje</Heading>
                    <Identity>
                        <IdentityField name="Meno" type="text" value={name} handleChange={(event) => this.handleFieldChange("name", event.target.value)} required={true}/>
                        <IdentityField name="Priezvisko" type="text" value={surname} handleChange={(event) => this.handleFieldChange("surname", event.target.value)} required={true}/>
                    </Identity>
                    
                    <Field name="E-mailová adresa" type="email" value={emailAddress} handleChange={(event) => this.handleFieldChange("emailAddress", event.target.value)}/>
                    
                    <RemmeberUserCheckbox name="Zapamätať si údaje" checked={rememberUser} handleChange={this.rememberUserhandler}/>
                    
                    <Heading heading="H2"><MaterialIcon icon="date_range"/> Voľné termíny</Heading>
                    <Details><MaterialIcon icon="info"/>Tip: Viete si spraviť rezerváciu na viacero termínov naraz vyplnením jedného formulára. Stačí zaškrtnúť všetky políčka/termíny, o ktoré máte záujem.</Details>
                    <SessionsContainer>
                        {checkboxGroups.length > 0 ? checkboxGroups : <p>Nie sú žiadne voľné termíny.</p>}
                    </SessionsContainer>
                    
                    <Button type={ButtonType.CONFIRM} onClick={this.submit} disabled={checkboxGroups.length === 0}>Odoslať</Button>
                </Content>
            </Container>
        );
    }
}

export default ReservationSystem;

//#region Styles

const Container = styled.div`
    text-align: center;
`;

const Content = styled.div`
    position: relative;
`;

const StyledLoadingSceen = styled(LoadingSceen)`
    left: -1px; // Neccessary because fields are poking out on the left a little bit on smaller screens for unknown reason.
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

const RemmeberUserCheckbox = styled(Checkbox)`
    margin: 10px 0;
`;

const SessionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    padding: 20px;
    margin: 15px 0 30px 0;
    
    background-color: #202020;
    border-radius: 5px;
`;

const StyledCheckboxGroup = styled(CheckboxGroup)`
    margin-right: 30px; 
    
    &:last-of-type
    {
        margin: 0;
    }
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 12px;
`;

//#endregion