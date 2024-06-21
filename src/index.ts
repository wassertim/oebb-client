import fs from "fs";
import { mapTripData } from "./mapper";
import { Response } from './types/oebb/response';
import { getConnections as searchTrip } from './oebb.service';
import { getTripSearchRequest } from './request.builder';

(async () => {
    let data: Response = readFromFile();
    if (!data) {
        data = await searchTrip(getTripSearchRequest());
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

function saveAsJson(data) {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 4));
}