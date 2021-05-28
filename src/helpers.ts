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

export function getUserInfo()
{
    let user = 
    {
        name : getLocalStorageItem("name"),
        surname : getLocalStorageItem("surname"),
        emailAddress : getLocalStorageItem("emailAddres"),
        rememberUser : false
    }
    
    if(user.name !== "" && user.surname !== "") user.rememberUser = true;
    
    return user;
}

export function getLocalStorageItem(key : string)
{
    let item = window.localStorage.getItem(key);
    return item === null ? "" : item;
}

export function deleteUserInfo()
{
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("surname");
    window.localStorage.removeItem("emailAddres");
    window.localStorage.removeItem("remeberUser");
}

export function setUserInfo(name : string, surname : string, emailAddress : string)
{
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("surname", surname);
    window.localStorage.setItem("emailAddres", emailAddress);
    window.localStorage.setItem("remeberUser", "true");
}