export interface DepartureArrival {
    locationIndex: number;
    locationName: string;
    scheduledTime: string;
    realTime: string | undefined;
    platform: string | undefined;
}

// Define MappedSection interface
export interface MappedSection {
    type: string;
    departure: DepartureArrival;
    arrival: DepartureArrival;
    duration: string;
}

// Define MappedTrip interface
export interface MappedTrip {
    tripId: string;
    date: string;
    duration: string;
    numberOfChanges: number;
    departure: {
        time: string;
        platform: string | undefined;
    };
    arrival: {
        time: string;
        platform: string | undefined;
    };
    delayInfo: boolean;
    sections: MappedSection[];
}