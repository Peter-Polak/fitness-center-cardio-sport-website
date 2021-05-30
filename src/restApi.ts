import { ReservationFormValidity, OrganizedSessions, IReservationForm, SessionsError, Reason } from "./types";

export const backendServerUrls = 
{
    release : "https://script.google.com/macros/s/AKfycbzlOl57hBNV5fF8g_waOrjOscdaQm4oisdXID2n0hPI7-yjYBrEKZGQ333zZpYUyskIBw/exec",
    dev : "https://script.google.com/macros/s/AKfycbxpAWLK9K4q22SEUAa3Ei45AsEE3zAtnH_b8B2W-dDDbP5kbPOwO_oTeoyHqt9YaWVzpw/exec"
}

export const currentServer = backendServerUrls.dev;

export async function getSessions() : Promise<OrganizedSessions | Reason<OrganizedSessions, SessionsError>>
{
    const response = await fetch(
        currentServer,
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
    const url = currentServer + query;
    
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