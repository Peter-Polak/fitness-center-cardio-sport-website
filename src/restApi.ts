
export const backendServerUrls = 
{
    release : "https://script.google.com/macros/s/AKfycbzlOl57hBNV5fF8g_waOrjOscdaQm4oisdXID2n0hPI7-yjYBrEKZGQ333zZpYUyskIBw/exec",
    dev : "https://script.google.com/macros/s/AKfycbxpAWLK9K4q22SEUAa3Ei45AsEE3zAtnH_b8B2W-dDDbP5kbPOwO_oTeoyHqt9YaWVzpw/exec"
}

export const currentServer = backendServerUrls.release;

export async function getSessions() : Promise<Sessions>
{
    const response = await fetch(
        currentServer,
        {
            method: 'GET',
        }
    );
    
    const sessions = response.json();
    
    console.log("getSessions: ", sessions);
    
    return sessions;
}

export async function postReservation(reservation : Reservation)
{
    const query = `?timestamp=${reservation.timestamp}&name=${reservation.name}&surname=${reservation.surname}&emailAddress=${reservation.emailAddress}&sessions=${reservation.sessions}`;
    const url = currentServer + query;
    
    const response = await fetch(
        url,
        {
            method: 'POST',
        }
    );
    
    const result = response.json();
    
    console.log("postReservation: ", result);
    
    return result;
}

export interface Session
{ 
    start : 
    {
        date : Date,
        string : string
    }
    end : 
    {
        date : Date,
        string : string
    }
    capacity : number
    reserved : number
}

export interface Sessions
{
    [date: string]: 
    { 
        day: string, 
        free : Array<Session>, 
        full : Array<Session> 
    } 
}

export interface Reservation
{
    timestamp : string,
    name : string, 
    surname : string,
    emailAddress : string,
    sessions : string
};