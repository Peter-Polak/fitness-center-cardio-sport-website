import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';

import { getSessions, postReservation } from "../utilities/restApi"
import { getTimestamp , getUserInfo, setUserInfo, deleteUserInfo } from '../utilities/helpers';

import Heading from '../components/Heading';
import MaterialIcon from '../components/MaterialIcon';
import Field from '../components/Field';
import CheckboxGroup from "../components/CheckboxGroup";
import LoadingSceen from "../components/LoadingSceen";
import Checkbox from "../components/Checkbox";
import Button, { ButtonType } from "../components/Button";
import { getReservationResponseComponent } from "../Reservation";
import { IReservationForm, OrganizedSessions, ReservationFormValidity, SessionsError } from "../utilities/backendTypes";
import { NotificationType } from "../components/Notification";
import NotificationManager from "../NotificationManager";
import React from "react";

interface IReservationSystemProps
{
    routeProps : RouteComponentProps<{}>
}

interface IReservationFormState
{
    sessions : OrganizedSessions
    name : string
    surname : string
    emailAddress : string
    checkboxStates : {[date : string] : Array<boolean>}
    rememberUser : boolean
    showLoadingScreen : boolean
    showStatusScreen : boolean
}

class ReservationForm extends Component<IReservationSystemProps, IReservationFormState>
{
    reservationResponse : ReservationFormValidity | undefined = undefined;
    test : React.RefObject<HTMLDivElement>;
    
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
        
        this.test = React.createRef();
        
        this.submit = this.submit.bind(this);
        this.rememberUserHandler = this.rememberUserHandler.bind(this);
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
        
        if(name === "")
        {
            NotificationManager.createNotification("error", "Prosím, vyplnťe položku 'Meno'.", 3000, NotificationType.ERROR);
            return;
        }
        
        if(surname === "")
        {
            NotificationManager.createNotification("error", "Prosím, vyplnťe položku 'Priezvisko'.", 3000, NotificationType.ERROR);
            return;
        }
        
        let sesionReservations : Array<string> = [];
        
        for(const key in checkboxStates)
        {
            const sessions = checkboxStates[key];
            
            sessions.forEach(
                (isChecked, index) =>
                {
                    if(isChecked) 
                    {
                        let session = this.state.sessions[key].free[index];
                        sesionReservations.push(`${key} ${session.time}`);
                    }
                }
            );
        }
        
        if(sesionReservations.length === 0)
        {
            NotificationManager.createNotification("error", "Prosím, vyberte si aspoň jeden voľný termín.", 3000, NotificationType.ERROR);
            return;
        }
        
        rememberUser ? setUserInfo(name, surname, emailAddress) : deleteUserInfo();
                
        let reservationForm : IReservationForm = 
        {
            timestamp : getTimestamp(),
            name : name, 
            surname : surname,
            emailAddress : emailAddress,
            sessionsString : sesionReservations.join(", ")
        };
        
        console.log(reservationForm);
        
        this.setState({ showLoadingScreen : true });
        this.showStatusScreen(await postReservation(reservationForm));
        this.setState({ showLoadingScreen : false });
    }
    
    updateSessions()
    {
        this.setState({showLoadingScreen : true});
        
        getSessions().then(
            (response) =>
            {
                if("error" in response)
                {
                    if(response.error === SessionsError.NO_SESSIONS)
                    {
                        this.setState(
                            {
                                sessions : {}, 
                                checkboxStates : {}, 
                                showLoadingScreen : false
                            }
                        );
                    }
                    return;
                }

                let checkboxStates : {[date : string] : Array<boolean>} = {};
        
                for(const date in response)
                {
                    checkboxStates[date] = response[date].free.map(session => false);
                }
                
                this.setState(
                    {
                        sessions : response, 
                        checkboxStates : checkboxStates, 
                        showLoadingScreen : false
                    }
                );
            }
        ).catch(
            () =>
            {
                this.showStatusScreen(undefined);
                this.setState({ showLoadingScreen : false });
            }
        );
    }
    
    rememberUserHandler(event : any)
    {
        const { name, surname, emailAddress } = this.state;
        
        const newValue = event.target.checked;
        this.setState({ rememberUser : newValue });
        
        newValue ? setUserInfo(name, surname, emailAddress) : deleteUserInfo();
    }
    
    resetForm()
    {
        this.reservationResponse = undefined;
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
                `${session.time} (${session.capacity - session.reserved}/${session.capacity})`
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
    
    showStatusScreen(content : ReservationFormValidity | undefined)
    {
        this.reservationResponse = content;
        this.setState({ showStatusScreen : true });
    }
    
    render() : JSX.Element
    {
        const { name, surname, emailAddress, rememberUser, showLoadingScreen, showStatusScreen } = this.state;
        
        const checkboxGroups : Array<JSX.Element> = this.getCheckBoxGroups();
        
        return (
            <Container>
                <Heading heading="H1"><MaterialIcon icon="book_online" color="dark"/> Rezervačný formulár</Heading>
                
                <Content>
                    {showLoadingScreen && <StyledLoadingSceen fullscreen={false}/>}
                    {showStatusScreen && getReservationResponseComponent(this.reservationResponse, this.resetForm)}
                    
                    <Heading heading="H2"><MaterialIcon icon="person"/> Osobné údaje</Heading>
                    <Identity>
                        <IdentityField name="Meno" type="text" value={name} onChange={(event) => this.handleFieldChange("name", event.target.value)} required={true}/>
                        <IdentityField name="Priezvisko" type="text" value={surname} onChange={(event) => this.handleFieldChange("surname", event.target.value)} required={true}/>
                    </Identity>
                    
                    <Field name="E-mailová adresa" type="email" value={emailAddress} onChange={(event) => this.handleFieldChange("emailAddress", event.target.value)}/>
                    
                    <RemmeberUserCheckbox name="Zapamätať si údaje" checked={rememberUser} onChange={this.rememberUserHandler}/>
                    <div ref={ this.test }></div>
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

export default ReservationForm;

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