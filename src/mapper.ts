import { MappedSection, MappedTrip } from "./types/types";
import { Section, Location, ResponseData, CommonData, Product } from './types/oebb/response';

function toReadableDate(isoDateString: string): string {
    return `${isoDateString.substring(6, 8)}.${isoDateString.substring(4, 6)}.${isoDateString.substring(0, 4)}`;
}

function toReadableDuration(duration: string): string {
    const hours = duration.substring(0, 2);
    const minutes = duration.substring(2, 4);
    if (hours === "00") {
        return `${minutes} minutes`;
    } else {
        return `${hours} hours and ${minutes} minutes`;
    }
}

function toReadableTime(time: string): string {
    return `${time.substring(0, 2)}:${time.substring(2, 4)}`;
}

function mapSections(sections: Section[], common: CommonData): MappedSection[] {
    const locations: Location[] = common.locL;
    const products: Product[] = common.prodL;

    return sections.map(section => {
        const productIndex = section.jny.prodX;
        const product = products[productIndex];

        return {
            type: section.type,
            departure: {
                locationIndex: section.dep.locX,
                locationName: locations[section.dep.locX].name,
                scheduledTime: toReadableTime(section.dep.dTimeS),
                realTime: section.dep.dTimeR ? toReadableTime(section.dep.dTimeR) : undefined,
                platform: section.dep.dPltfS.txt,
                product: product.name
            },
            arrival: {
                locationIndex: section.arr.locX,
                locationName: locations[section.arr.locX].name,
                scheduledTime: toReadableTime(section.arr.aTimeS || ''),
                realTime: section.arr.aTimeR ? toReadableTime(section.arr.aTimeR) : undefined,
                platform: section.arr.aPltfS?.txt,
                product: product.name
            },
            duration: section.durS
        };
    });
}

export const mapTripData = (responseData: ResponseData): MappedTrip => {
    // mapTripData(data.svcResL[0].res.outConL[0], data.svcResL[0].res.common.locL);
    const trip = responseData.outConL[0];

    return {
        tripId: trip.cid,
        date: toReadableDate(trip.date),
        duration: toReadableDuration(trip.dur),
        numberOfChanges: trip.chg,
        departure: {
            time: toReadableTime(trip.dep.dTimeS),
            platform: trip.dep.dPltfS.txt
        },
        arrival: {
            time: toReadableTime(trip.arr.aTimeS || ''),
            platform: trip.arr.aPltfS?.txt
        },
        delayInfo: trip.hasDelayInfo,
        sections: mapSections(trip.secL, responseData.common)
    };
};