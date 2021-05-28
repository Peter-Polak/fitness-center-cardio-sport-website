import styled from "styled-components";
import Button from "./components/Button";
import MaterialIcon from "./components/MaterialIcon";
import StatusScreen, { StatusType } from "./components/StatusScreen";

export enum SessionError
{
    DOES_NOT_EXIST = "DOESNT_EXIST",
    IS_FULL = "FULL",
    RESERVATION_EXISTS = "RESERVATION_EXISTS"
}

export interface Session
{
    startDate : Date
    endDate : Date
    capacity : number
    reserved : number
}

export interface Reservation
{
    timestamp : string;
     name : string;
     surname: string;
     sessions : Array<Session>;
     emailAddress : string;
     wasCancelled : boolean;
     wasntPresent : boolean;
     sessionStrings : Array<string>
}

export interface ReservationValidity
{
    reservation : Reservation
    isValid : boolean
    reasons? : 
    {
        [dateTime : string] : 
        {
            session : Session
            error : SessionError
        }
    }
}

export function getReservationResponseComponent(reservationResponse : ReservationValidity | undefined, close : () => void)
{
    console.log(reservationResponse);
    
    if(reservationResponse === undefined)
    {
        return (
            <StyledStatusSceen type={StatusType.ERROR} fullscreen={false}>
                <p>Nepodarilo sa pripojiť na servér! Skontrulujte vaše pripojenie na internet.</p>
                <Button onClick={() =>window.location.reload()}><MaterialIcon icon="refresh" size="50px"/></Button>
            </StyledStatusSceen>
        );
    }
    
    const statusType = reservationResponse.isValid ? StatusType.SUCCES : StatusType.ERROR;
    let content : JSX.Element = <></>;
    
    if(reservationResponse.isValid)
    {
        const reservation = reservationResponse.reservation;
        
        content = (
            <div>
                <p>Vašu rezerváciu sme úspešne prijali!</p>
                <div>
                    <p>Meno: {reservation.name}</p>
                    <p>Priezvisko: {reservation.surname}</p>
                    <p>E-mailova adresa: {reservation.emailAddress}</p>
                    <p>Terminy: {reservation.sessionStrings.join(", ")}</p>
                </div>
            </div>
        );
    }
    else
    {
        const reservation = reservationResponse.reservation;
        const reasons = reservationResponse.reasons;
        
        if(reasons)
        {
            let reasonItems : Array<JSX.Element> = [];
            
            for(const session in reasons)
            {
                const reason = reasons[session];
                let reasonText = "";
                
                switch(reason.error)
                {
                    case SessionError.DOES_NOT_EXIST:
                        reasonText = `Termín ${session} už skončil/neexistuje.`;
                        break;
                    case SessionError.IS_FULL:
                        reasonText = `Termín ${session} je už plný.`;
                        break;
                    case SessionError.RESERVATION_EXISTS:
                        reasonText = `Rezervácia na termín ${session} na meno '${reservation.name} ${reservation.surname}' už existuje.`;
                        break;
                    default:
                        reasonText = `Nastala neočakávaná chyba pri spracovavaní terminú ${session}.`;
                        break;
                }
                
                const reasonItem = <li key={session}>{reasonText}</li>;
                reasonItems.push(reasonItem);
            }
            
            content = (
                <div>
                    <span>Nastala chyba pri spracovaní vašej rezervácie!</span>
                    <div>
                        <ol>
                            {reasonItems}
                        </ol>
                    </div>
                </div>
            );
        }
    }
    
    return (
        <StyledStatusSceen type={statusType} fullscreen={false} close={close}>
            {content}
        </StyledStatusSceen>
    );
}


const StyledStatusSceen = styled(StatusScreen)`
    left: -1px; // Neccessary because fields are poking out on the left a little bit on smaller screens for unknown reason.
`;