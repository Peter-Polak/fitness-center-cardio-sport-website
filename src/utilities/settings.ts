interface ApplicationSettings
{
    backendUrl : string
    userTrafficUrl : string
    sessionOverviewTableUrl : string
}

const development : ApplicationSettings = 
{
    backendUrl : "https://script.google.com/macros/s/AKfycbxpAWLK9K4q22SEUAa3Ei45AsEE3zAtnH_b8B2W-dDDbP5kbPOwO_oTeoyHqt9YaWVzpw/exec",
    // backendUrl : "https://script.google.com/macros/s/AKfycbzjQSp2EQ3RGc8J7aAU5-Jaa04VsOXOXz84LN2yieAm/dev",
    userTrafficUrl : "https://script.google.com/macros/s/AKfycbwAyhIVokozp9An4D04PMwUNnF8P0fpXZ0UawsciWh8-2xb-1QhnjUyXfCRJyY3E9K-ww/exec",
    sessionOverviewTableUrl : "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2agEjJFrLSOqaRY0Sklzidr_-HeqHtcAQSLdziIGuSl152OBlls2uNZ9o9NCOlYRJJaAXX_f5fPHj/pubhtml?gid=513466788&amp;single=true&amp;widget=true&amp;headers=false",
};

const production : ApplicationSettings = 
{
    backendUrl : "https://script.google.com/macros/s/AKfycbzlOl57hBNV5fF8g_waOrjOscdaQm4oisdXID2n0hPI7-yjYBrEKZGQ333zZpYUyskIBw/exec",
    userTrafficUrl : "https://script.google.com/macros/s/AKfycbwbRXXDQ17Nzv11nlk4SawRnMt7qfIzEQFESi7So05ENRhCBtXSfqnppy6lmC5ohl8W/exec",
    sessionOverviewTableUrl : "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLQhQqciBIdTlzJuguYshxnj2F4TgufIa5_xDAVIncSh7GLWSKqAh-FHaLv5wbvc1-JUW1--niaKWj/pubhtml?gid=984167338&amp;single=true&amp;widget=true&amp;headers=false",
};

export const settings = process.env.NODE_ENV === 'development' ? development : production;
export const tokenLength = 6;