export interface Auth {
    type: string;
    aid: string;
}

export interface Position {
    x: number;
    y: number;
    acc: number;
}

export interface Client {
    id: string;
    type: string;
    name: string;
    l: string;
    v: number;
    pos: Position;
}

export interface Location {
    lid: string;
    name: string;
    eteId: string;
}

export interface FilterProfile {
    type: string;
    enabled: boolean;
    maxdist: string;
}

export interface GisFilter {
    type: string;
    mode: string;
    profile?: FilterProfile;
    meta?: string;
}

export interface JourneyFilter {
    type: string;
    mode: string;
    value: number;
}

export interface Request {
    depLocL: Location[];
    arrLocL: Location[];
    minChgTime: string;
    liveSearch: boolean;
    maxChg: string;
    jnyFltrL: JourneyFilter[];
    gisFltrL: GisFilter[];
    getPolyline: boolean;
    outFrwd: boolean;
    outTime: string;
    outDate: string;
    getPasslist: boolean;
    getTariff: boolean;
}

export interface ServiceRequest {
    meth: string;
    req: Request;
    id: string;
}

export interface RequestBody {
    id: string;
    ver: string;
    lang: string;
    auth: Auth;
    client: Client;
    formatted: boolean;
    ext: string;
    svcReqL: ServiceRequest[];
}