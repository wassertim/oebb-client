// Define Location interface
export interface Location {
    name: string;
}

// Define Departure and Arrival interfaces
export interface DepartureArrival {
    locX: number;
    dTimeS: string;
    dTimeR?: string;
    aTimeS: string;
    aTimeR?: string;
    dPltfS: {
        txt: string;
    };
    aPltfS: {
        txt: string;
    };
}

// Define Section interface
export interface Section {
    type: string;
    dep: DepartureArrival;
    arr: DepartureArrival;
    durS: string;
}

// Define Trip interface
export interface Trip {
    cid: string;
    date: string;
    dur: string;
    chg: number;
    dep: DepartureArrival;
    arr: DepartureArrival;
    hasDelayInfo: boolean;
    secL: Section[];
}