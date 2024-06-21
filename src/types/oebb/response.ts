export interface Coordinate {
    x: number;
    y: number;
    floor?: number;
}

export interface GlobalId {
    id: string;
    type: string;
}

export interface Location {
    lid: string;
    type: string;
    name: string;
    icoX: number;
    extId: string;
    state: string;
    crd: Coordinate;
    pCls: number;
    globalIdL: GlobalId[];
    chgTime: string;
}

export interface ProductContext {
    name: string;
    num?: string;
    line?: string;
    matchId?: string;
    catOut?: string;
    catOutS?: string;
    catOutL?: string;
    catIn?: string;
    catCode?: string;
    admin?: string;
}

export interface Product {
    pid?: string;
    name: string;
    nameS?: string;
    number?: string;
    icoX: number;
    cls: number;
    oprX?: number;
    prodCtx: ProductContext;
}

export interface Operator {
    name: string;
    icoX: number;
    matchId: string;
}

export interface Remark {
    type: string;
    code?: string;
    icoX: number;
    txtN?: string;
}

export interface HimMessage {
    hid: string;
    act: boolean;
    head: string;
    text: string;
    icoX: number;
    prio: number;
    fLocX: number;
    tLocX: number;
    prod: number;
    src: number;
    vDays: ScheduleDays;
    lModDate: string;
    lModTime: string;
    sDate: string;
    sTime: string;
    eDate: string;
    eTime: string;
    sDaily: string;
    eDaily: string;
    comp: string;
    catRefL: number[];
    pubChL: {
        name: string;
        fDate: string;
        fTime: string;
        tDate: string;
        tTime: string;
    }[];
    edgeRefL: number[];
}

export interface Icon {
    res: string;
    fg?: {
        r: number;
        g: number;
        b: number;
    };
    bg?: {
        r: number;
        g: number;
        b: number;
    };
    txt?: string;
    shp?: string;
}

export interface RequestLocation {
    loc: Location;
    state: string;
    eteId: string;
}

export interface HimMessageEdge {
    icoCrd: Coordinate;
}

export interface HimMessageCategory {
    id: number;
}

export interface Direction {
    txt: string;
    flg: string;
}

export interface DrawStyle {
    sIcoX?: number;
    eIcoX?: number;
    type: string;
    bg: {
        r: number;
        g: number;
        b: number;
    };
}

export interface RealTimeSource {
    name: string;
    type: string;
    heartbeatTS: string;
    freeTextIdCount: number;
}

export interface TimeStyle {
    mode: string;
    fg?: {
        r: number;
        g: number;
        b: number;
    };
    strikeOut?: boolean;
}

export interface DepartureArrival {
    locX: number;
    idx: number;
    dProdX?: number;
    dPltfS: {
        type: string;
        txt: string;
    };
    dTimeS: string;
    dTimeFS: {
        styleX: number;
    };
    dProgType: string;
    dTZOffset: number;
    type: string;
    aProdX?: number;
    aPltfS?: {
        type: string;
        txt: string;
    };
    aTimeS?: string;
    aTimeR?: string;
    dTimeR?: string;
    aTimeFS?: {
        styleX: number;
    };
    aTimeFR?: {
        styleX: number;
        txtA: string;
    };
    aProgType?: string;
    aTZOffset?: number;
}

export interface Stop {
    locX: number;
    idx: number;
    dProdX: number;
    dPltfS: {
        type: string;
        txt: string;
    };
    dTimeS: string;
    dTimeFS: {
        styleX: number;
    };
    dProgType: string;
    dDirTxt: string;
    dDirFlg: string;
    dTZOffset: number;
    type: string;
    border?: boolean;
    aProdX?: number;
    aPltfS?: {
        type: string;
        txt: string;
    };
    aTimeS?: string;
    aTimeFS?: {
        styleX: number;
    };
    aTZOffset?: number;
}

export interface Frequency {
    minC: number;
    maxC: number;
    numC: number;
    jnyL: {
        jid: string;
        date: string;
        prodX: number;
        dirTxt: string;
        dirFlg: string;
        stopL: Stop[];
        ctxRecon: string;
        subscr: string;
        prodL: {
            prodX: number;
            fLocX: number;
            tLocX: number;
            fIdx: number;
            tIdx: number;
        }[];
        dirL: Direction[];
        sumLDrawStyleX: number;
        resLDrawStyleX: number;
        trainStartDate: string;
        durS: string;
    }[];
}

export interface Section {
    type: string;
    dep: DepartureArrival;
    arr: DepartureArrival;
    durS: string;
    jny: Journey;
}

export interface Journey {
    jid: string;
    date: string;
    prodX: number;
    dirTxt: string;
    dirFlg: string;
    status: string;
    isRchbl: boolean;
    stopL: Stop[];
    freq: Frequency;
    ctxRecon: string;
    msgL: JourneyMessage[];
    subscr: string;
    prodL: JourneyProduct[];
    dirL: Direction[];
    sumLDrawStyleX: number;
    resLDrawStyleX: number;
    trainStartDate: string;
    durS: string;
}

export interface JourneyMessage {
    type: string;
    remX: number;
    sty: string;
    fLocX: number;
    tLocX: number;
    tagL: string[];
    sort: number;
}

export interface JourneyProduct {
    prodX: number;
    fLocX: number;
    tLocX: number;
    fIdx: number;
    tIdx: number;
}

export interface Direction {
    dirX: number;  // Direction index
    fLocX: number; // From location index
    tLocX: number; // To location index
    fIdx: number;  // From index within a segment
    tIdx: number;  // To index within a segment
}

export interface ScheduleDays {
    sDaysR: string;
    sDaysB?: string;
}

export interface Connection {
    cid: string;
    date: string;
    dur: string;
    durS: string;
    durR?: string;
    chg: number;
    sDays: ScheduleDays;
    dep: DepartureArrival;
    arr: DepartureArrival;
    secL: Section[];
    freq: Frequency;
    trfRes: {
        statusCode: string;
        extContActionBar: {
            text: string;
            content: {
                type: string;
                content: string;
            };
        };
    };
    conSubscr: string;
    recState: string;
    cksum: string;
    cksumDti: string;
    cksumSave: string;
    intvlSubscr: string;
    originType: string;
    recon: {
        ctx: string;
    };
    durFmt: {
        styleX: number;
    };
    hasDelayInfo: boolean;
}

export interface ServiceResponse {
    id: string;
    meth: string;
    err: string;
    res: {
        common: {
            locL: Location[];
            prodL: Product[];
            opL: Operator[];
            remL: Remark[];
            himL: HimMessage[];
            icoL: Icon[];
            reqLocL: RequestLocation[];
            himMsgEdgeL: HimMessageEdge[];
            himMsgCatL: HimMessageCategory[];
            dirL: Direction[];
            lDrawStyleL: DrawStyle[];
            rtSrcL: RealTimeSource[];
            timeStyleL: TimeStyle[];
        };
        outConL: Connection[];
        outCtxScrB: string;
        outCtxScrF: string;
        fpB: string;
        fpE: string;
        planrtTS: string;
        outConGrpSettings: {
            conGrpL: {
                name: string;
                icoX: number;
                grpid: string;
                conScoringL: {
                    type: string;
                    conScoreL: {
                        score: number;
                        scoreS: string;
                        conRefL: number[];
                    }[];
                    name: string;
                }[];
                initScoringType: string;
                requests: {
                    id: string;
                    autosend: boolean;
                }[];
                scrollable: boolean;
                bitmask: number;
            }[];
            selectL: {
                icoX: number;
                name: string;
                bitIdx: number;
            }[];
            variant: string;
        };
    };
}

export interface Response {
    ver: string;
    ext: string;
    lang: string;
    id: string;
    err: string;
    graph: {
        id: string;
        index: number;
    };
    subGraph: {
        id: string;
        index: number;
    };
    view: {
        id: string;
        index: number;
        type: string;
    };
    svcResL: ServiceResponse[];
}