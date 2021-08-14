//#region Errors

export enum TextFieldError
{
    IS_REQUIRED,
    INVALID_INPUT
}

export enum ReservationError
{
    RESERVATION_EXISTS = "RESERVATION_EXISTS"
}

export enum SessionError
{
    NOT_FOUND = "NOT_FOUND",
    FULL = "FULL",
    ENDED = "ENDED"
}

export enum SessionsError
{
    NO_SESSIONS = "NO_SESSIONS",
    NEW_RESERVATIONS_NOT_ALOWED = "NEW_RESERVATIONS_NOT_ALOWED"
}

//#endregion


//#region Validity

export interface Validity<Object, InvalidityReason>
{
    object : Object
    isValid : boolean
    invalidityReasons : Array<InvalidityReason>
}
export interface ReservationFormValidity extends Validity<IReservationForm, TextFieldValidity | ReservationValidity>{}
export interface ReservationValidity extends Validity<ReservationJson, ReservationInvalidityReason | SessionInvalidityReason>{}
export interface TextFieldValidity extends Validity<{ name : string, value : string }, TextFieldIvalidityReason>{}

//#endregion


//#region Invalidity Reason

export interface InvalidityReason<Value, Error>
{
    value : Value
    error : Error
}
export interface TextFieldIvalidityReason extends InvalidityReason<string, TextFieldError>{}
export interface ReservationInvalidityReason extends InvalidityReason<ReservationJson, ReservationError>{}
export interface SessionInvalidityReason extends InvalidityReason<SessionJson, SessionError>{}

//#endregion


export interface IReservationForm
{ 
    timestamp : string;
    name : string;
    surname: string;
    emailAddress: string;
    sessionsString : string;
}

export interface IReservation
{ 
    timestamp : string;
    name : string;
    surname: string;
    session : ISession;
    sessionString : string;
    emailAddress : string;
    wasCancelled : boolean | undefined;
    wasntPresent : boolean | undefined;
}

export interface ISession
{ 
    startDate : Date;
    endDate : Date;
    capacity : number;
    reserved : number;
}

export interface ReservationJson
{ 
    timestamp : string;
    name : string;
    surname: string;
    session : SessionJson;
    sessionString : string;
    emailAddress : string;
    wasCancelled : boolean | undefined;
    wasntPresent : boolean | undefined;
}

export interface SessionJson
{ 
    start : 
    {
        date : Date,
        string : 
        {
            date : string,
            time : string
        }
    },
    end : 
    {
        date : Date,
        string : 
        {
            date : string,
            time : string
        }
    },
    date : string,
    time : string,
    capacity : number,
    reserved : number
}

export interface OrganizedSessions
{ 
    [date: string]: 
    { 
        day: string, 
        free : Array<SessionJson>, 
        full : Array<SessionJson> 
    } 
}

export interface User
{
    emailAddress : string
    token : string
}

//#region Settings

export interface AppSettings
{
    times : Array<SessionTime>
    timetable : Timetable
    capacity : number
    scheduleOfNewSessions : WeekSchedule
}

export interface WeekSchedule
{
    monday : DaySchedule, 
    tuesday : DaySchedule, 
    wednesday : DaySchedule, 
    thursday : DaySchedule, 
    friday : DaySchedule, 
    saturday : DaySchedule, 
    sunday : DaySchedule
}

export interface DaySchedule
{
    monday : boolean, 
    tuesday : boolean, 
    wednesday : boolean, 
    thursday : boolean, 
    friday : boolean, 
    saturday : boolean, 
    sunday : boolean
}

export interface Timetable
{ 
    monday : Array<SessionTime>, 
    tuesday : Array<SessionTime>, 
    wednesday : Array<SessionTime>, 
    thursday : Array<SessionTime>, 
    friday : Array<SessionTime>, 
    saturday : Array<SessionTime>, 
    sunday : Array<SessionTime>
}

export interface SessionTime
{
    start : Time
    end : Time
}


export interface Time
{
    hours : number,
    minutes : number
}

//#endregion