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
    DOES_NOT_EXIST = "DOESNT_EXIST",
    IS_FULL = "FULL"
}

export enum SessionsError
{
    NO_SESSIONS = "NO_SESSIONS",
    NEW_RESERVATIONS_NOT_ALOWED = "NEW_RESERVATIONS_NOT_ALOWED"
}

//#endregion

//#region Validity

export interface Validity<Object, Reason>
{
    object : Object
    isValid : boolean
    reasons : Array<Reason>
}
export interface ReservationFormValidity extends Validity<IReservationForm, TextFieldValidity | ReservationValidity>{}
export interface TextFieldValidity extends Validity<{ name : string, value : string }, TextFieldReason>{}
export interface ReservationValidity extends Validity<ReservationJson, ReservationReason>{}

//#endregion

//#region Reason

export interface Reason<Value, Error>
{
    value : Value
    error : Error
}
export interface TextFieldReason extends Reason<string, TextFieldError>{}
export interface ReservationReason extends Reason<SessionJson, ReservationError | SessionError>{}

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


interface ReservationJson
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

interface SessionJson
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