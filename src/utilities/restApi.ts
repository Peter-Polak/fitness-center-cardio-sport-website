import { settings } from "./settings";
import { ReservationFormValidity, OrganizedSessions, IReservationForm, SessionsError, Reason } from "./types";

export async function getSessions() : Promise<OrganizedSessions | Reason<OrganizedSessions, SessionsError>>
{
    const response = await fetch(
        settings.backendUrl,
        {
            method: 'GET'
        }
    );
    
    const sessions = response.json();
    
    console.log("getSessions: ", sessions);
    
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
    
    console.log("postReservation: ", result);
    
    return result;
}