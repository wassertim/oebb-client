import { RequestBody } from './types/oebb/request';

export async function getConnections(requestBody: RequestBody) {    
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