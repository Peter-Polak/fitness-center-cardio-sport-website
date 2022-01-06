import React from "react";
import { useLocation } from "react-router-dom";
import { settings } from "./settings";

//From: https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript
declare global 
{
    interface Window 
    { 
        jscd : 
        {
            screen: string,
            browser: string,
            browserVersion: string,
            browserMajorVersion: number,
            mobile: boolean,
            os: string,
            osVersion: string
        }
    }
}

interface IVisitInfo
{ 
    timestamp : Date;
    isoDate : string;
    isoTime : string;
    page : string;
    refferer : string;
    operatingSystemName : string;
    operatingSystemVersion : string;
    isMobile : boolean;
    language : string;
    browserName : string;
    browserVersion : string;
    browserMajorVersion : number;
    screenWidth : string;
    screenHeight : string;
    documentWidth : string;
    documentHeight : string;
    innerWidth : string;
    innerHeight : string;
}

export function useUserTraffic()
{
    let location = useLocation();
    React.useEffect(
        () => 
        {
            let sheets : Array<string> = [];

            // Check if it is a new user
            if (window.localStorage.getItem("returningUser") === null)
            {
                sheets.push("users");
                window.localStorage.setItem("returningUser", "true");
            }

            // Check if it is a the same session
            if (!sessionStorage.sameSession)
            {
                sheets.push("sessions");
                sessionStorage.sameSession = true;
            }

            sheets.push("alltraffic");
            sendVisitInfo(sheets);
        }, 
        [location]
    );
}

export async function sendVisitInfo(sheets : Array<string>)
{
    const visitInfo : IVisitInfo = getVisitInfo();

    let query : string = `?sheet=${sheets.toString()}`;

    const url = settings.userTrafficUrl + query;

    await fetch(
        url,
        {
            method: 'POST',
            mode:'no-cors',
            headers: 
            {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(visitInfo)
        }
    );
}

// From: https://stackoverflow.com/a/18706818
export function javaScriptClientDetection()
{
    var unknown = '-';

    // screen
    var screenSize = getScreenSize();

    // browser
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) !== -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf('OPR')) !== -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    // Legacy Edge
    else if ((verOffset = nAgt.indexOf('Edge')) !== -1) {
        browser = 'Microsoft Legacy Edge';
        version = nAgt.substring(verOffset + 5);
    } 
    // Edge (Chromium)
    else if ((verOffset = nAgt.indexOf('Edg')) !== -1) {
        browser = 'Microsoft Edge';
        version = nAgt.substring(verOffset + 4);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) !== -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') !== -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() === browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) !== -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) !== -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) !== -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // mobile version
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

    // system
    var os = unknown;
    var clientStrings = [
        {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
        {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
        {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
        {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
        {s:'Windows Vista', r:/Windows NT 6.0/},
        {s:'Windows Server 2003', r:/Windows NT 5.2/},
        {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
        {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
        {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
        {s:'Windows 98', r:/(Windows 98|Win98)/},
        {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
        {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s:'Windows CE', r:/Windows CE/},
        {s:'Windows 3.11', r:/Win16/},
        {s:'Android', r:/Android/},
        {s:'Open BSD', r:/OpenBSD/},
        {s:'Sun OS', r:/SunOS/},
        {s:'Chrome OS', r:/CrOS/},
        {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
        {s:'iOS', r:/(iPhone|iPad|iPod)/},
        {s:'Mac OS X', r:/Mac OS X/},
        {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s:'QNX', r:/QNX/},
        {s:'UNIX', r:/UNIX/},
        {s:'BeOS', r:/BeOS/},
        {s:'OS/2', r:/OS\/2/},
        {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {// @ts-ignore
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS':
        case 'Mac OS X':
        case 'Android':// @ts-ignore
            osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(nAgt)[1];  //([\.\_\d]+)
            break;

        case 'iOS':// @ts-ignore
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);// @ts-ignore
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    
    window.jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        browserMajorVersion: majorVersion,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
    };

    Date.prototype.toJSON = function(){ return this.toString(); }
}

function getScreenSize()
{
    var screenSize = '';
    var width: string | number = '';
    var height: string | number = '';

    if (window.screen.width)
    {
        width = (window.screen.width) ? window.screen.width : '';
        height = (window.screen.height) ? window.screen.height : '';
        screenSize += '' + width + " x " + height;
    }

    return screenSize;
}

function getVisitInfo(): IVisitInfo 
{
    const now = new Date();
    const visitInfo : IVisitInfo = 
    {
        timestamp : now,
        isoDate : now.toISOString().slice(0, 10),
        isoTime : now.toISOString().slice(11, 19),
        page : window.location.pathname,
        refferer : document.referrer,
        operatingSystemName : window.jscd.os,
        operatingSystemVersion : window.jscd.osVersion,
        isMobile : window.jscd.mobile,
        language : navigator.language,
        browserName : window.jscd.browser,
        browserVersion : window.jscd.browserVersion,
        browserMajorVersion : window.jscd.browserMajorVersion,
        screenWidth : window.screen.width.toString(),
        screenHeight : window.screen.height.toString(),
        documentWidth : document.body.clientWidth.toString(),
        documentHeight : document.body.clientHeight.toString(),
        innerWidth : window.innerWidth.toString(),
        innerHeight : window.innerHeight.toString()
    };

    return visitInfo;
}

// function getIpGeolocationInfo()
// {
//     const visitInfo : IVisitInfo = getVisitInfo();

//     let query : string = `?sheet=${sheets.toString()}`;

//     const url = settings.userTrafficUrl + query;

//     await fetch(
//         url,
//         {
//             method: 'POST',
//             mode:'no-cors',
//             headers: 
//             {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body: JSON.stringify(visitInfo)
//         }
//     );
// }

