import { settings } from "./settings";
import { ReservationFormValidity, OrganizedSessions, IReservationForm, InvalidityReason, SessionsError, IReservation } from "./backendTypes";

export async function getSessions() : Promise<OrganizedSessions | InvalidityReason<OrganizedSessions, SessionsError>>
{
    const query = `?request=sessions`;
    const url = settings.backendUrl + query;

    const response = await fetch(
        url,
        {
            method: 'GET'
        }
    );
    
    const sessions = response.json();
    
    return sessions;
}

export async function getReservations(token : string) : Promise<Array<IReservation>>
{
    const query = `?request=reservations&token=${token}`;
    const url = settings.backendUrl + query;

    const response = await fetch(
        url,
        {
            method: 'GET'
        }
    );
    
    const sessions = response.json();
    
    return sessions;
}

export async function postReservation(reservation : IReservationForm) : Promise<ReservationFormValidity>
{
    const query = `?timestamp=${reservation.timestamp}&name=${reservation.name}&surname=${reservation.surname}&emailAddress=${reservation.emailAddress}&sessionsString=${reservation.sessionsString}`;
    const url = settings.backendUrl + query;
    
    const response = await fetch(
        url,
        {
            method: 'POST'
        }
    );
    
    const result = response.json();
    
    return result;
}