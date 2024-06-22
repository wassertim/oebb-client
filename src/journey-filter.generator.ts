import { JourneyFilter } from './types/oebb/request';

export enum ProductBits {
    LongDistanceTrains = 4101,
    Night_and_HighSpeedTrains = 8,
    RegionalTrains = 16,
    SBahn = 32,
    UBahn = 256,
    Trams = 512,
    Buses = 64,
    Ferries = 128,
    OtherTransports = 2048,
    RailReplacementServices = 2
}

export function generateJourneyFilter(selectedToggles: ProductBits[]): JourneyFilter {
    const value = selectedToggles.reduce((acc, toggle) => {
        return acc | toggle;
    }, 0);

    const finalValue = value !== 0 ? value | 8192 : value;

    return {
        type: "PROD",
        mode: "INC",
        value: finalValue
    };
}