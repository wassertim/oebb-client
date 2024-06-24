/**
 * Interface representing coordinates.
 */
export interface Coordinate {
    /**
     * X coordinate.
     */
    x: number;

    /**
     * Y coordinate.
     */
    y: number;

    /**
     * Floor level (optional).
     */
    floor?: number;
}

/**
 * Interface representing a global identifier.
 */
export interface GlobalId {
    /**
     * Identifier.
     */
    id: string;

    /**
     * Type of the identifier.
     */
    type: string;
}

/**
 * Interface representing a location.
 */
export interface Location {
    /**
     * Location identifier.
     */
    lid: string;

    /**
     * Type of the location.
     */
    type: string;

    /**
     * Name of the location.
     */
    name: string;

    /**
     * Icon index associated with the location.
     */
    icoX: number;

    /**
     * External identifier for the location.
     */
    extId: string;

    /**
     * State of the location.
     */
    state: string;

    /**
     * Coordinates of the location.
     */
    crd: Coordinate;

    /**
     * Platform class of the location.
     */
    pCls: number;

    /**
     * List of global identifiers associated with the location.
     */
    globalIdL: GlobalId[];

    /**
     * Change time for the location.
     */
    chgTime: string;
}

/**
 * Interface representing the context of a product.
 */
export interface ProductContext {
    /**
     * Name of the product.
     */
    name: string;

    /**
     * Optional: Number associated with the product.
     */
    num?: string;

    /**
     * Optional: Line identifier of the product.
     */
    line?: string;

    /**
     * Optional: Match identifier for the product.
     */
    matchId?: string;

    /**
     * Optional: Category output of the product.
     */
    catOut?: string;

    /**
     * Optional: Short category output of the product.
     */
    catOutS?: string;

    /**
     * Optional: Long category output of the product.
     */
    catOutL?: string;

    /**
     * Optional: Internal category of the product.
     */
    catIn?: string;

    /**
     * Optional: Category code of the product.
     */
    catCode?: string;

    /**
     * Optional: Administrative code associated with the product.
     */
    admin?: string;
}

/**
 * Interface representing a product.
 */
export interface Product {
    /**
     * Optional: Product identifier.
     */
    pid?: string;

    /**
     * Name of the product.
     */
    name: string;

    /**
     * Optional: Short name of the product.
     */
    nameS?: string;

    /**
     * Optional: Number associated with the product.
     */
    number?: string;

    /**
     * Icon index of the product.
     */
    icoX: number;

    /**
     * Class of the product.
     */
    cls: number;

    /**
     * Optional: Operator index of the product.
     */
    oprX?: number;

    /**
     * Context of the product.
     */
    prodCtx: ProductContext;
}

/**
 * Interface representing a journey product.
 */
export interface JourneyProduct {
    /**
     * Product index.
     */
    prodX: number;

    /**
     * From location index.
     */
    fLocX: number;

    /**
     * To location index.
     */
    tLocX: number;

    /**
     * From index.
     */
    fIdx: number;

    /**
     * To index.
     */
    tIdx: number;
}

/**
 * Interface representing an operator.
 */
export interface Operator {
    /**
     * Name of the operator.
     */
    name: string;

    /**
     * Icon index associated with the operator.
     */
    icoX: number;

    /**
     * Match identifier for the operator.
     */
    matchId: string;
}

/**
 * Interface representing a remark.
 */
export interface Remark {
    /**
     * Type of the remark.
     */
    type: string;

    /**
     * Code associated with the remark (optional).
     */
    code?: string;

    /**
     * Icon index associated with the remark.
     */
    icoX: number;

    /**
     * Text of the remark (optional).
     */
    txtN?: string;
}

/**
 * Interface representing a HIM (Hazard Incidence Maintenance) message.
 */
export interface HimMessage {
    /**
     * Hazard Incidence Maintenance message ID.
     */
    hid: string;

    /**
     * Indicates if the message is active.
     */
    act: boolean;

    /**
     * Header or title of the message.
     */
    head: string;

    /**
     * Text content of the message.
     */
    text: string;

    /**
     * Icon index associated with the message.
     */
    icoX: number;

    /**
     * Priority of the message.
     */
    prio: number;

    /**
     * Index of the from location.
     */
    fLocX: number;

    /**
     * Index of the to location.
     */
    tLocX: number;

    /**
     * Product index related to the message.
     */
    prod: number;

    /**
     * Source identifier of the message.
     */
    src: number;

    /**
     * Validity days of the message in binary format.
     */
    vDays: ScheduleDays;

    /**
     * Last modification date of the message in YYYYMMDD format.
     */
    lModDate: string;

    /**
     * Last modification time of the message in HHMMSS format.
     */
    lModTime: string;

    /**
     * Start date of the message validity in YYYYMMDD format.
     */
    sDate: string;

    /**
     * Start time of the message validity in HHMMSS format.
     */
    sTime: string;

    /**
     * End date of the message validity in YYYYMMDD format.
     */
    eDate: string;

    /**
     * End time of the message validity in HHMMSS format.
     */
    eTime: string;

    /**
     * Daily start time of the message validity in HHMMSS format.
     */
    sDaily: string;

    /**
     * Daily end time of the message validity in HHMMSS format.
     */
    eDaily: string;

    /**
     * Component associated with the message.
     */
    comp: string;

    /**
     * List of category references.
     */
    catRefL: number[];

    /**
     * List of publication channels.
     */
    pubChL: PublicationChannel[];

    /**
     * List of edge references.
     */
    edgeRefL: number[];
}

/**
 * Interface representing a publication channel.
 */
export interface PublicationChannel {
    /**
     * Name of the publication channel.
     */
    name: string;

    /**
     * Start date of the publication in YYYYMMDD format.
     */
    fDate: string;

    /**
     * Start time of the publication in HHMMSS format.
     */
    fTime: string;

    /**
     * End date of the publication in YYYYMMDD format.
     */
    tDate: string;

    /**
     * End time of the publication in HHMMSS format.
     */
    tTime: string;
}

/**
 * Interface representing an icon with optional foreground, background colors, and text.
 */
export interface Icon {
    /**
     * Resource identifier for the icon.
     */
    res: string;

    /**
     * Foreground color of the icon (optional).
     */
    fg?: Color;

    /**
     * Background color of the icon (optional).
     */
    bg?: Color;

    /**
     * Text associated with the icon (optional).
     */
    txt?: string;

    /**
     * Shape of the icon (optional).
     */
    shp?: string;
}

/**
 * Interface representing a request location.
 */
export interface RequestLocation {
    /**
     * Location details.
     */
    loc: Location;

    /**
     * State of the location.
     */
    state: string;

    /**
     * ETE (Estimated Time of Exit) identifier.
     */
    eteId: string;
}

/**
 * Interface representing a coordinate of a HimMessage edge.
 */
export interface HimMessageEdge {
    /**
     * Coordinates of the icon.
     */
    icoCrd: Coordinate;
}

/**
 * Interface representing a HimMessage category.
 */
export interface HimMessageCategory {
    /**
     * Identifier for the category.
     */
    id: number;
}

/**
 * Interface representing a direction.
 */
export interface Direction {
    /**
     * Text describing the direction.
     */
    txt: string;

    /**
     * Flag associated with the direction.
     */
    flg: string;
}

/**
 * Interface representing a drawing style.
 */
export interface DrawStyle {
    /**
     * Start icon index (optional).
     */
    sIcoX?: number;

    /**
     * End icon index (optional).
     */
    eIcoX?: number;

    /**
     * Type of the drawing style.
     */
    type: string;

    /**
     * Background color of the drawing style.
     */
    bg: Color;
}

/**
 * Interface representing a real-time source.
 */
export interface RealTimeSource {
    /**
     * Name of the real-time source.
     */
    name: string;

    /**
     * Type of the real-time source.
     */
    type: string;

    /**
     * Heartbeat timestamp for the real-time source.
     */
    heartbeatTS: string;

    /**
     * Count of free text identifiers.
     */
    freeTextIdCount: number;
}

/**
 * Interface representing a color with red, green, and blue components.
 */
export interface Color {
    /**
     * Red component of the color.
     */
    r: number;

    /**
     * Green component of the color.
     */
    g: number;

    /**
     * Blue component of the color.
     */
    b: number;
}

/**
 * Interface representing a time style.
 */
export interface TimeStyle {
    /**
     * Mode of the time style.
     */
    mode: string;

    /**
     * Foreground color of the time style (optional).
     */
    fg?: Color;

    /**
     * Whether the time style is struck out (optional).
     */
    strikeOut?: boolean;
}

/**
     * Interface representing a platform.
     */
export interface Platform {
    /**
     * Type of the platform.
     */
    type: string;

    /**
     * Text describing the platform.
     */
    txt: string;
}

/**
 * Interface representing a time format style.
 */
export interface TimeFormatStyle {
    /**
     * Style index for the time format.
     */
    styleX: number;
}

/**
 * Interface extending TimeFormatStyle with additional text.
 */
export interface TimeFormatStyleWithText extends TimeFormatStyle {
    /**
     * Additional text associated with the time format style.
     */
    txtA: string;
}

/**
 * Interface representing departure and arrival information for a journey segment.
 */
export interface DepartureArrival {
    /**
     * Location index for the departure or arrival.
     */
    locX: number;

    /**
     * Index within the segment.
     */
    idx: number;

    /**
     * Product index for departure (optional).
     */
    dProdX?: number;

    /**
     * Platform information for departure.
     */
    dPltfS: Platform;

    /**
     * Scheduled departure time in HHMM format.
     */
    dTimeS: string;

    /**
     * Time format style for scheduled departure time.
     */
    dTimeFS: TimeFormatStyle;

    /**
     * Progress type for departure.
     */
    dProgType: string;

    /**
     * Timezone offset for departure.
     */
    dTZOffset: number;

    /**
     * Type of departure or arrival.
     */
    type: string;

    /**
     * Product index for arrival (optional).
     */
    aProdX?: number;

    /**
     * Platform information for arrival (optional).
     */
    aPltfS?: Platform;

    /**
     * Scheduled arrival time in HHMM format (optional).
     */
    aTimeS?: string;

    /**
     * Real arrival time in HHMM format (optional).
     */
    aTimeR?: string;

    /**
     * Real departure time in HHMM format (optional).
     */
    dTimeR?: string;

    /**
     * Time format style for scheduled arrival time (optional).
     */
    aTimeFS?: TimeFormatStyle;

    /**
     * Time format style with text for real arrival time (optional).
     */
    aTimeFR?: TimeFormatStyleWithText;

    /**
     * Progress type for arrival (optional).
     */
    aProgType?: string;

    /**
     * Timezone offset for arrival (optional).
     */
    aTZOffset?: number;
}

/**
 * Interface representing a stop in a journey.
 */
export interface Stop {
    /**
     * Location index.
     */
    locX: number;

    /**
     * Index of the stop.
     */
    idx: number;

    /**
     * Departure product index.
     */
    dProdX: number;

    /**
     * Departure platform.
     */
    dPltfS: Platform;

    /**
     * Scheduled departure time.
     */
    dTimeS: string;

    /**
     * Departure time format style.
     */
    dTimeFS: TimeFormatStyle;

    /**
     * Departure prognosed type.
     */
    dProgType: string;

    /**
     * Departure direction text.
     */
    dDirTxt: string;

    /**
     * Departure direction flag.
     */
    dDirFlg: string;

    /**
     * Departure time zone offset.
     */
    dTZOffset: number;

    /**
     * Type of the stop.
     */
    type: string;

    /**
     * Border flag.
     */
    border?: boolean;

    /**
     * Arrival product index (optional).
     */
    aProdX?: number;

    /**
     * Arrival platform (optional).
     */
    aPltfS?: Platform;

    /**
     * Scheduled arrival time (optional).
     */
    aTimeS?: string;

    /**
     * Arrival time format style (optional).
     */
    aTimeFS?: TimeFormatStyle;

    /**
     * Arrival time zone offset (optional).
     */
    aTZOffset?: number;
}

/**
 * Interface representing the frequency of a journey.
 */
export interface Frequency {
    /**
     * Minimum count.
     */
    minC: number;

    /**
     * Maximum count.
     */
    maxC: number;

    /**
     * Number count.
     */
    numC: number;

    /**
     * List of journeys.
     */
    jnyL: Journey[];
}

/**
 * Interface representing a section of a journey.
 */
export interface Section {
    /**
     * Type of the section.
     */
    type: string;

    /**
     * Departure information.
     */
    dep: DepartureArrival;

    /**
     * Arrival information.
     */
    arr: DepartureArrival;

    /**
     * Duration of the section in string format.
     */
    durS: string;

    /**
     * Journey details.
     */
    jny: Journey;
}

/**
 * Interface representing a journey segment within a connection.
 */
export interface Journey {
    /**
     * Unique identifier for the journey.
     */
    jid: string;

    /**
     * Date of the journey in YYYYMMDD format.
     */
    date: string;

    /**
     * Product index associated with the journey (e.g., train type).
     */
    prodX: number;

    /**
     * Direction text for the journey.
     */
    dirTxt: string;

    /**
     * Direction flag for the journey.
     */
    dirFlg: string;

    /**
     * Status of the journey.
     */
    status: string;

    /**
     * Indicates whether the journey is reachable.
     */
    isRchbl: boolean;

    /**
     * List of stops in the journey.
     */
    stopL: Stop[];

    /**
     * Frequency information for the journey.
     */
    freq: Frequency;

    /**
     * Context reconstruction information for the journey.
     */
    ctxRecon: string;

    /**
     * List of messages associated with the journey.
     */
    msgL: JourneyMessage[];

    /**
     * Subscription information for the journey.
     */
    subscr: string;

    /**
     * List of products associated with the journey.
     */
    prodL: JourneyProduct[];

    /**
     * List of directions associated with the journey.
     */
    dirL: Direction[];

    /**
     * Summary line draw style index for the journey.
     */
    sumLDrawStyleX: number;

    /**
     * Result line draw style index for the journey.
     */
    resLDrawStyleX: number;

    /**
     * Start date of the train in YYYYMMDD format.
     */
    trainStartDate: string;

    /**
     * Scheduled duration of the journey in HHMM format.
     */
    durS: string;

    /**
     * Polyline group data for the journey, referencing indices in the common polyline list.
     */
    polyG: PolylineGroup;
}

export interface PolylineGroup {
    /**
     * List of indices in the common polyline list.
     */
    polyXL: number[];
}

/**
 * Interface representing a message within a journey.
 */
export interface JourneyMessage {
    /**
     * Type of the message.
     */
    type: string;

    /**
     * Remark index.
     */
    remX: number;

    /**
     * Style of the message.
     */
    sty: string;

    /**
     * From location index.
     */
    fLocX: number;

    /**
     * To location index.
     */
    tLocX: number;

    /**
     * List of tags associated with the message.
     */
    tagL: string[];

    /**
     * Sort order for the message.
     */
    sort: number;
}

/**
 * Interface representing a direction.
 */
export interface Direction {
    /**
     * Direction index.
     */
    dirX: number;

    /**
     * From location index.
     */
    fLocX: number;

    /**
     * To location index.
     */
    tLocX: number;

    /**
     * From index within a segment.
     */
    fIdx: number;

    /**
     * To index within a segment.
     */
    tIdx: number;
}

export interface ScheduleDays {
    sDaysR: string;
    sDaysB?: string;
}

/**
 * Interface representing a connection or trip option.
 */
export interface Connection {
    /**
     * Unique identifier for the connection.
     */
    cid: string;
    
    /**
     * Date of the connection in YYYYMMDD format.
     */
    date: string;
    
    /**
     * Duration of the connection in HHMM format.
     */
    dur: string;
    
    /**
     * Scheduled duration of the connection in HHMM format.
     */
    durS: string;
    
    /**
     * Real-time duration of the connection in HHMM format, if available.
     */
    durR?: string;
    
    /**
     * Number of changes (transfers) required for the connection.
     */
    chg: number;
    
    /**
     * Schedule days for the connection, including regular and binary representations.
     */
    sDays: ScheduleDays;
    
    /**
     * Departure details for the connection.
     */
    dep: DepartureArrival;
    
    /**
     * Arrival details for the connection.
     */
    arr: DepartureArrival;
    
    /**
     * List of sections that make up the connection.
     */
    secL: Section[];
    
    /**
     * Frequency information for the connection.
     */
    freq: Frequency;
    
    /**
     * Traffic result information for the connection.
     */
    trfRes: TrafficResult;
    
    /**
     * Subscription information for the connection.
     */
    conSubscr: string;
    
    /**
     * Record state of the connection.
     */
    recState: string;
    
    /**
     * Checksum of the connection data.
     */
    cksum: string;
    
    /**
     * Checksum for date-time integrity.
     */
    cksumDti: string;
    
    /**
     * Checksum save value.
     */
    cksumSave: string;
    
    /**
     * Interval subscription for the connection.
     */
    intvlSubscr: string;
    
    /**
     * Type of origin for the connection.
     */
    originType: string;
    
    /**
     * Reconnection context information.
     */
    recon: ReconnectionContext;
    
    /**
     * Duration format style information.
     */
    durFmt: DurationFormat;
    
    /**
     * Indicates whether delay information is available for the connection.
     */
    hasDelayInfo: boolean;
}

/**
 * Interface representing the format of a duration.
 */
export interface DurationFormat {
    /**
     * Style index for the duration format.
     */
    styleX: number;
}

/**
 * Interface representing the context for reconnection.
 */
export interface ReconnectionContext {
    /**
     * Context string for the reconnection.
     */
    ctx: string;
}

/**
 * Interface representing the result of a traffic-related operation.
 */
export interface TrafficResult {
    /**
     * Status code of the traffic result.
     */
    statusCode: string;

    /**
     * Extended content action bar associated with the traffic result.
     */
    extContActionBar: ExtContActionBar;
}

/**
 * Interface representing the content of an action bar.
 */
export interface ActionBarContent {
    /**
     * Type of the content.
     */
    type: string;

    /**
     * Content string.
     */
    content: string;
}

/**
 * Interface representing an extended content action bar.
 */
export interface ExtContActionBar {
    /**
     * Text for the action bar.
     */
    text: string;

    /**
     * Content associated with the action bar.
     */
    content: ActionBarContent;
}

/**
 * Interface representing a service response from the API.
 */
export interface ServiceResponse {
    /**
     * Unique identifier for the service response.
     */
    id: string;
    
    /**
     * Method or type of service requested.
     */
    meth: string;
    
    /**
     * Error message or status of the service response.
     */
    err: string;
    
    /**
     * Response data specific to the service requested.
     */
    res: ResponseData;
}

export interface Polyline {
    delta: boolean;
    dim: number;
    crdEncYX: string;
    crdEncS: string;
    crdEncF: string;
    ppLocRefL: {
        ppIdx: number;
        locX: number;
    }[];
    lDrawStyleX: number;
}

/**
 * Interface representing common data shared across multiple responses.
 */
export interface CommonData {
    /**
     * List of locations.
     */
    locL: Location[];
    
    /**
     * List of products (e.g., train types).
     */
    prodL: Product[];
    
    /**
     * List of operators (e.g., train companies).
     */
    opL: Operator[];
    
    /**
     * List of remarks or notes associated with the data.
     */
    remL: Remark[];
    
    /**
     * List of HIM (hazard, incident, and maintenance) messages.
     */
    himL: HimMessage[];
    
    /**
     * List of icons used in the response.
     */
    icoL: Icon[];
    
    /**
     * List of requested locations.
     */
    reqLocL: RequestLocation[];
    
    /**
     * List of HIM (hazard, incident, and maintenance) message edges.
     */
    himMsgEdgeL: HimMessageEdge[];
    
    /**
     * List of HIM (hazard, incident, and maintenance) message categories.
     */
    himMsgCatL: HimMessageCategory[];
    
    /**
     * List of directions.
     */
    dirL: Direction[];
    
    /**
     * List of draw styles.
     */
    lDrawStyleL: DrawStyle[];
    
    /**
     * List of real-time sources.
     */
    rtSrcL: RealTimeSource[];
    
    /**
     * List of time styles.
     */
    timeStyleL: TimeStyle[];

    /**
     * List of polylines associated with the response.
     */
    polyL?: Polyline[];
}

/**
 * Interface representing the scoring of a connection group.
 */
export interface ConnectionGroupScoring {
    /**
     * Type of the scoring.
     */
    type: string;

    /**
     * List of connection group scores.
     */
    conScoreL: ConnectionGroupScore[];

    /**
     * Name of the scoring type.
     */
    name: string;
}

/**
 * Interface representing a connection group score.
 */
export interface ConnectionGroupScore {
    /**
     * Numerical score of the connection group.
     */
    score: number;

    /**
     * String representation of the score.
     */
    scoreS: string;

    /**
     * List of connection references associated with the score.
     */
    conRefL: number[];
}

/**
 * Interface representing a request within a connection group.
 */
export interface ConnectionGroupRequest {
    /**
     * Identifier of the request.
     */
    id: string;

    /**
     * Flag indicating whether the request is sent automatically.
     */
    autosend: boolean;
}

/**
 * Interface representing a connection group.
 */
export interface ConnectionGroup {
    /**
     * Name of the connection group.
     */
    name: string;

    /**
     * Icon index associated with the connection group.
     */
    icoX: number;

    /**
     * Group identifier for the connection group.
     */
    grpid: string;

    /**
     * List of connection group scoring details.
     */
    conScoringL: ConnectionGroupScoring[];

    /**
     * Initial scoring type for the connection group.
     */
    initScoringType: string;

    /**
     * List of requests associated with the connection group.
     */
    requests: ConnectionGroupRequest[];

    /**
     * Indicates if the connection group is scrollable.
     */
    scrollable: boolean;

    /**
     * Bitmask value for the connection group.
     */
    bitmask: number;
}

/**
 * Interface representing the settings of a connection group.
 */
export interface ConnectionGroupSettings {
    /**
     * List of connection groups.
     */
    conGrpL: ConnectionGroup[];

    /**
     * List of selectable options for connection groups.
     */
    selectL: Selection[];

    /**
     * Variant type of the connection group settings.
     */
    variant: string;
}

/**
 * Interface representing the structure of response data from the API.
 */
export interface ResponseData {
    /**
     * Contains common data shared across multiple responses, such as locations, products, operators, etc.
     */
    common: CommonData;
    
    /**
     * List of connections, where each connection represents a trip option with departure and arrival details.
     */
    outConL: Connection[];
    
    /**
     * Context string used for scroll-backward pagination of connections.
     */
    outCtxScrB: string;
    
    /**
     * Context string used for scroll-forward pagination of connections.
     */
    outCtxScrF: string;
    
    /**
     * Start date of the current timetable period in YYYYMMDD format.
     */
    fpB: string;
    
    /**
     * End date of the current timetable period in YYYYMMDD format.
     */
    fpE: string;
    
    /**
     * Timestamp of when the timetable data was last updated.
     */
    planrtTS: string;
    
    /**
     * Settings for connection groups, including available groups and scoring criteria.
     */
    outConGrpSettings: ConnectionGroupSettings;
}

/**
 * Interface representing a graph structure.
 */
export interface Graph {
    /**
     * Identifier of the graph.
     */
    id: string;

    /**
     * Index of the graph.
     */
    index: number;
}

/**
 * Interface representing a sub-graph structure.
 */
export interface SubGraph {
    /**
     * Identifier of the sub-graph.
     */
    id: string;

    /**
     * Index of the sub-graph.
     */
    index: number;
}

/**
     * Interface representing a view.
     */
export interface View {
    /**
     * Identifier of the view.
     */
    id: string;

    /**
     * Index of the view.
     */
    index: number;

    /**
     * Type of the view.
     */
    type: string;
}

/**
 * Interface representing the structure of the full response from the API.
 */
export interface Response {
    /**
     * Version of the API.
     */
    ver: string;
    
    /**
     * Extension identifier for additional API features.
     */
    ext: string;
    
    /**
     * Language code of the response data.
     */
    lang: string;
    
    /**
     * Unique identifier for the response.
     */
    id: string;
    
    /**
     * Error message or status of the response.
     */
    err: string;
    
    /**
     * Graph-related data, such as graph ID and index.
     */
    graph: Graph;
    
    /**
     * Subgraph-related data, such as subgraph ID and index.
     */
    subGraph: SubGraph;
    
    /**
     * View-related data, such as view ID, index, and type.
     */
    view: View;
    
    /**
     * List of service responses, where each service response contains specific data requested from the API.
     */
    svcResL: ServiceResponse[];
}