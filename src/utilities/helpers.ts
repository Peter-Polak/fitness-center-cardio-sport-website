//#region General

/**
 * Get a string representation of a number.
 * @param number Number to convert.
 * @returns {string} String representation of a number.
*/
export function getNumberString(number : number) : string
{
    return number < 10 ? '0' + number : '' + number;
}

/**
 * Get local storage item as string based on key.
 * @param key Key of the item.
 * @returns {string} Local storage item as string.
 */
export function getLocalStorageItem(key : string) : string
{
    let item = window.localStorage.getItem(key);
    return item === null ? "" : item;
}

/**
 * Generate ID of varied length and characters.
 * @param length Length of the generated ID. Default is `6`.
 * @param validCharacters Valid characters used in generation of the ID. Default is `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`.
 * @returns {string} ID as a string.
 */
export function getUniqueIdentifier(length : number = 6, validCharacters : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") : string
{
    let uniqueIdentifier = "";
    
    for (let index = 0; index < length; index++)
    {
        let randomNumber = Math.random();
        let charPos = Math.floor(randomNumber * validCharacters.length);
        uniqueIdentifier += validCharacters.charAt(charPos);
    }
    
    return uniqueIdentifier;
}

//#endregion

//#region Date and time

/**
 * Get a string representation of a date in the format `dd.mm.yyyy`.
 * @param date Date to convert.
 * @returns {string} Formated date string.
 */
 export function getDateString(date : Date) : string
{
    const day = `${getNumberString(date.getDate())}`;
    const month = `${getNumberString(date.getMonth() + 1)}`;
    const year = `${date.getFullYear()}`;
    
    return `${day}.${month}.${year}`;
}

/**
 * Get a string representation of a time in the format `hh:mm:ss`.
 * @param date 
 * @returns {string} Formated time string.
 */
export function getTimeString(date : Date) : string
{
    const hours = `${getNumberString(date.getHours())}`;
    const minutes = `${getNumberString(date.getMinutes())}`;
    const seconds = `${getNumberString(date.getSeconds())}`;
    
    return `${hours}:${minutes}:${seconds}`;
}

/**
 * Get current timestamp in format `dd.mm.yyyy hh:mm:ss`.
 * @returns {string} 
 */
export function getTimestamp() : string
{
    const now = new Date();
    const timestamp =`${getDateString(now)} ${getTimeString(now)}`;
    
    return timestamp;
}

//#endregion

//#region User info

/**
 * Get user info fro mlocal storage
 * @returns User info as an object.
 */
export function getUserInfo() : { name : string, surname : string, emailAddress : string, rememberUser : boolean }
{
    let user = 
    {
        name : getLocalStorageItem("name"),
        surname : getLocalStorageItem("surname"),
        emailAddress : getLocalStorageItem("emailAddress"),
        rememberUser : false
    }
    
    if(user.name !== "" && user.surname !== "") user.rememberUser = true;
    
    return user;
}

/**
 * Save user info into local storage.
 * @param name Users name.
 * @param surname Users surname.
 * @param emailAddress Users e-mail address.
 */
export function setUserInfo(name : string, surname : string, emailAddress : string)
{
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("surname", surname);
    window.localStorage.setItem("emailAddress", emailAddress);
    window.localStorage.setItem("rememberUser", "true");
}

/**
 * Deletes user info from local storage.
 */
export function deleteUserInfo()
{
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("surname");
    window.localStorage.removeItem("emailAddress");
    window.localStorage.removeItem("rememberUser");
}

//#endregion

//#region Token info

/**
 * Get token info from local storage.
 * @returns Token info as object.
 */
export function getTokenInfo() : { rememberToken: boolean; token: string }
{
    let tokenInfo = 
    {
        rememberToken : getLocalStorageItem("rememberToken") === "true" ? true : false,
        token : getLocalStorageItem("token")
    }

    return tokenInfo;
}

/**
 * Save token info into local storage.
 * @param token Token.
 */
export function setTokenInfo(token : string)
{
    window.localStorage.setItem("rememberToken", "true");
    window.localStorage.setItem("token", token);
}

/**
 * Delete token info from local storage.
 */
export function deleteTokenInfo()
{
    window.localStorage.removeItem("rememberToken");
    window.localStorage.removeItem("token");
}

//#endregion