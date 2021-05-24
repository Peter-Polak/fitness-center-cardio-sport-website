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

/**
 * Get a string representation of a number.
 * @param number Number to convert.
*/
export function getNumberString(number : number) : string
{
    return number < 10 ? '0' + number : '' + number;
}

/**
 * Get a string representation of a date in the format "dd.mm.yyyy".
 * @param date Date to convert.
 */
 export function getDateString(date : Date)
{
    const day = `${getNumberString(date.getDate())}`;
    const month = `${getNumberString(date.getMonth() + 1)}`;
    const year = `${date.getFullYear()}`;
    
    return `${day}.${month}.${year}`;
}

export function getTimeString(date : Date)
{
    const hours = `${getNumberString(date.getHours())}`;
    const minutes = `${getNumberString(date.getMinutes())}`;
    const seconds = `${getNumberString(date.getSeconds())}`;
    
    return `${hours}:${minutes}:${seconds}`;
}

export function getTimestamp()
{
    const now = new Date();
    const timestamp =`${getDateString(now)} ${getTimeString(now)}`;
    
    return timestamp;
}