import styled from "styled-components";
import Button, { ButtonType } from "./components/Button";
import MaterialIcon from "./components/MaterialIcon";
import StatusScreen, { StatusType } from "./components/StatusScreen";
import { ReservationError, ReservationFormValidity } from "./types";

export function getReservationResponseComponent(reservationFormValidity : ReservationFormValidity | undefined, close : () => void)
{
    console.log(reservationFormValidity);
    
    if(reservationFormValidity === undefined)
    {
        return (
            <StyledStatusSceen type={StatusType.ERROR} fullscreen={false}>
                <p>Nepodarilo sa pripojiť na servér! Skontrolujte vaše pripojenie na internet.</p>
                <Button onClick={() =>window.location.reload()}><MaterialIcon icon="refresh" size="50px"/></Button>
            </StyledStatusSceen>
        );
    }
    
    const statusType = reservationFormValidity.isValid ? StatusType.SUCCES : StatusType.ERROR;
    let content : JSX.Element = <></>;
    
    if(reservationFormValidity.isValid)
    {
        const { name, surname, emailAddress, sessionsString } = reservationFormValidity.object;
        
        content = (
            <div>
                <p>Vašu rezerváciu sme úspešne prijali!</p>
                <div>
                    <p>Meno: {name}</p>
                    <p>Priezvisko: {surname}</p>
                    <p>E-mailova adresa: {emailAddress}</p>
                    <p>Terminy: {sessionsString}</p>
                </div>
            </div>
        );
    }
    else
    {
        const reservationForm = reservationFormValidity.object;
        const reasons = reservationFormValidity.reasons;
        
        if(reasons.length > 0)
        {
            let reasonItems : Array<JSX.Element> = [];
            
            for(const validity of reasons)
            {
                let reasonText = "";
                
                for (const reason of validity.reasons)
                {
                    switch(reason.error)
                    {
                        case ReservationError.DOES_NOT_EXIST:
                            reasonText = `Termín ${reason.value.date} ${reason.value.time} už skončil/neexistuje.`;
                            break;
                        case ReservationError.IS_FULL:
                            reasonText = `Termín ${reason.value.date} ${reason.value.time} je už plný.`;
                            break;
                        case ReservationError.RESERVATION_EXISTS:
                            reasonText = `Rezervácia na termín ${reason.value.date} ${reason.value.time} na meno '${reservationForm.name} ${reservationForm.surname}' už existuje.`;
                            break;
                        default:
                            reasonText = `Nastala neočakávaná chyba pri spracovavaní formulára.`;
                            break;
                    }
                    
                    const reasonItem = <li key={JSON.stringify(reason.value)}>{reasonText}</li>;
                    reasonItems.push(reasonItem);
                }
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
            <Button type={ButtonType.CONFIRM} onClick={close}>Spraviť novú rezerváciu</Button>
        </StyledStatusSceen>
    );
}


const StyledStatusSceen = styled(StatusScreen)`
    left: -1px; // Neccessary because fields are poking out on the left a little bit on smaller screens for unknown reason.
`;