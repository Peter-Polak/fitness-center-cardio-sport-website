import { Day, Month } from "./utilities/enums";

export const openingHours = 
[
    {
        validity : 
        {
            from : "14.02.2022",
            to: ""
        },
        monday : ["15:00 - 22:00"],
        tuesday : ["15:00 - 16:00", "17:00 - 22:00"],
        wednesday : ["15:00 - 22:00"],
        thursday : ["15:00 - 22:00"],
        friday : ["15:00 - 22:00"],
        saturday : ["16:00 - 21:00"],
        sunday : ["16:00 - 21:00"]
    }
];

const slovak = 
{
    days : ["Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota", "Nedeľa"],
    months : ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    pages:
    {
        home : 
        {
            title : "Domov",
            annoucements : 
            {
                2021:
                {
                    
                },
                2022:
                {
                    january:
                    [
                        {
                            isActive : true,
                            title: "Zmena otváracích hodín od 14.02.2022",

                        }
                    ],
                    february:
                    {

                    }
                }
            }
        },
        openingHours : 
        {
            title : "Otváracie hodiny",
            validity: "Platné od",
            spinningWarning : "V Utorky a Štvrtky o 17:30 - 18:30 sa v zadnej časti posilňovne (kde sú vzpieračské pódia, stojan, klietka, leg press a rotopédy) konajú hodiny spinningu. Počas tejto doby je zadná časť vyhradená iba pre spinning a iným návštevníkom nedostupná a uzavretá!"
        },
        pricing : 
        {
            title : "Cenník"
        },
        rules : 
        {
            title : "Vnútorný poriadok"
        },
        gallery : 
        {
            title : "Galéria"
        },
        contact : 
        {
            title : "Kontakt",
            adress : 
            {
                title : "Adresa"
            },
            phone : 
            {
                title : "Telefonický kontakt"
            },
            webmaster : 
            {
                title : "Správca stránky"
            }
        }
    },
    warning : "Upozornenie"
}

const english : typeof slovak = 
{
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    pages:
    {
        home : 
        {
            title : "Home",
            annoucements:
            {
                2021:
                {

                },
                2022:
                {
                    january: 
                    [
                        {
                            isActive : true,
                            title: "Change of opening hours from 14.02.2022",

                        }
                    ],
                    february:
                    [

                    ]
                }
            }
        },
        openingHours : 
        {
            title : "Opening hours",
            validity: "Valid since",
            // V Utorky a Štvrtky o 17:30 - 18:30 sa v zadnej časti posilňovne (kde sú vzpieračské pódia, stojan, klietka, leg press a rotopédy) konajú hodiny spinningu. Počas tejto doby je zadná časť vyhradená iba pre spinning a iným návštevníkom nedostupná a uzavretá!
            spinningWarning : "On Mondays and Thursdays at 17:30 - 18:30 in the back side of the gym (where weightlifting podiums, rack,cage, leg press and stationary bikes are located)"
        },
        pricing : 
        {
            title : "Pricing"
        },
        rules : 
        {
            title : "Rules"
        },
        gallery : 
        {
            title : "Gallery"
        },
        contact : 
        {
            title : "Contact",
            adress : 
            {
                title : "Address"
            },
            phone : 
            {
                title : "Phone"
            },
            webmaster : 
            {
                title : "Webmaster"
            }
        }
    },
    warning : "Warning"
}

export const texts = localStorage.getItem("language") === 'en' ? english : slovak;

export function getTranslatedDay(day : Day) : string
{
    return texts.days[day];
}

export function getTranslatedMonth(month : Month) : string
{
    return texts.days[month];
}