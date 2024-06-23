import { mapTripData } from "./mapper";
import { getConnections as searchTrip } from './oebb.service';
import { getTripSearchRequest } from './request.builder';
import { withCache } from './util/cache';
import { ProductBits, generateJourneyFilter } from './journey-filter.generator';

(async () => {
    const meansOfTransport = [ProductBits.SBahn, ProductBits.RegionalTrains, ProductBits.LongDistanceTrains];
    let data = await withCache(searchTrip, true)(getTripSearchRequest(generateJourneyFilter(meansOfTransport)));    
    const tripData = mapTripData(data.svcResL[0].res);
    console.log(JSON.stringify(tripData, null, 4));
})();