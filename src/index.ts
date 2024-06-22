import fs from "fs";
import { mapTripData } from "./mapper";
import { getConnections as searchTrip } from './oebb.service';
import { getTripSearchRequest } from './request.builder';
import { withCache } from './util/cache';
import { ProductBits, generateJourneyFilter } from './journey-filter.generator';

(async () => {
    const meansOfTransport = [ProductBits.SBahn];
    let data = await withCache(searchTrip, true)(getTripSearchRequest(generateJourneyFilter(meansOfTransport)));        
    const tripData = mapTripData(data.svcResL[0].res);
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