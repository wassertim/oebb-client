import fs from "fs";
import { mapTripData } from "./mapper";
import { RequestBody } from './types/oebb/request';
import { Response } from './types/oebb/response';


(async () => {
    let data: Response = readFromFile();
    if (!data) {
        data = await requestData();
        saveAsJson(data);
    }

    saveAsJson(data);
    // data.svcResL[0].res.outConL.forEach((connection) => {
    //     parseTripData(connection);               
    // });  
    const tripData = mapTripData(data.svcResL[0].res.outConL[0], data.svcResL[0].res.common.locL);
    console.log(JSON.stringify(tripData, null, 4));    
})();

function readFromFile() {
    if (fs.existsSync("data.json")) {
        return JSON.parse(fs.readFileSync("data.json", "utf8"));
    }
    return null;
}

async function requestData() {
    const requestBody: RequestBody = {
        id: "fq4w2zxk2qkdgk4k",
        ver: "1.72",
        lang: "deu",
        auth: {
            type: "AID",
            aid: "5vHavmuWPWIfetEe"
        },
        client: {
            id: "OEBB",
            type: "WEB",
            name: "webapp",
            l: "vs_webapp",
            v: 21402,
            pos: {
                x: 9685319,
                y: 47546545,
                acc: 35
            }
        },
        formatted: false,
        ext: "OEBB.14",
        svcReqL: [
            {
                meth: "TripSearch",
                req: {
                    depLocL: [
                        {
                            lid: "A=1@O=Lindau (Bodensee) Insel@X=9680465@Y=47544343@U=81@L=8000230@B=1@p=1718958082@",
                            name: "Lindau (Bodensee) Insel",
                            eteId: "dep_0|S|Lindau (Bodensee) Insel|8000230|9680465|47544343"
                        }
                    ],
                    arrLocL: [
                        {
                            lid: "A=1@O=Feldkirch Bahnhof@X=9604668@Y=47241451@U=81@L=1280402@B=1@p=1718958082@",
                            name: "Feldkirch Bahnhof",
                            eteId: "arr_0|S|Feldkirch Bahnhof|1280402|9604668|47241451"
                        }
                    ],
                    minChgTime: "-1",
                    liveSearch: false,
                    maxChg: "1000",
                    jnyFltrL: [
                        {
                            type: "PROD",
                            mode: "INC",
                            value: 15359
                        }
                    ],
                    gisFltrL: [
                        {
                            type: "P",
                            mode: "FB",
                            profile: {
                                type: "F",
                                enabled: true,
                                maxdist: "2000"
                            }
                        },
                        {
                            type: "M",
                            mode: "FBT",
                            meta: "foot_speed_normal"
                        },
                        {
                            type: "P",
                            mode: "FB",
                            profile: {
                                type: "B",
                                enabled: false,
                                maxdist: "0"
                            }
                        },
                        {
                            type: "M",
                            mode: "FBT",
                            meta: "bike_speed_normal"
                        }
                    ],
                    getPolyline: false,
                    outFrwd: true,
                    outTime: "121304",
                    outDate: "20240621",
                    getPasslist: true,
                    getTariff: true
                },
                id: "1|32|"
            }
        ]
    };
    const response = await fetch("https://fahrplan.oebb.at/bin/mgate.exe?rnd=1718976006172", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-GB,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Brave\";v=\"126\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-correlation-id": "02df8b9f-56d7-4586-8add-57532242550e",
            "cookie": "oebbHistory=Location1%3DA%3D1%40O%3DBrunn%2FGebirge%40X%3D16288058%40Y%3D48104955%40u%3D0%40U%3D81%40L%3D1131704%40%26",
            "Referer": "https://fahrplan.oebb.at/webapp/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify(requestBody),
        "method": "POST"
    });

    return response.json();
}

function saveAsJson(data) {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 4));
}