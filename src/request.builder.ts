import { RequestBody } from './types/oebb/request';

export const getTripSearchRequest = (): RequestBody => ({
    id: "fq4w2zxk2qkdgk4k",
    ver: "1.72",
    lang: "deu",
    auth: {
        type: "AID",
        aid: "5vHavmuWPWIfetEe"
    },
    client: {
        id: "OEBB",
        type: "WEB",
        name: "webapp",
        l: "vs_webapp",
        v: 21402,
        pos: {
            x: 9685319,
            y: 47546545,
            acc: 35
        }
    },
    formatted: false,
    ext: "OEBB.14",
    svcReqL: [
        {
            meth: "TripSearch",
            req: {
                depLocL: [
                    {
                        lid: "A=1@O=Lindau (Bodensee) Insel@X=9680465@Y=47544343@U=81@L=8000230@B=1@p=1718958082@",
                        name: "Lindau (Bodensee) Insel",
                        eteId: "dep_0|S|Lindau (Bodensee) Insel|8000230|9680465|47544343"
                    }
                ],
                arrLocL: [
                    {
                        lid: "A=1@O=Feldkirch Bahnhof@X=9604668@Y=47241451@U=81@L=1280402@B=1@p=1718958082@",
                        name: "Feldkirch Bahnhof",
                        eteId: "arr_0|S|Feldkirch Bahnhof|1280402|9604668|47241451"
                    }
                ],
                minChgTime: "-1",
                liveSearch: false,
                maxChg: "1000",
                jnyFltrL: [
                    {
                        type: "PROD",
                        mode: "INC",
                        value: 15359
                    }
                ],
                gisFltrL: [
                    {
                        type: "P",
                        mode: "FB",
                        profile: {
                            type: "F",
                            enabled: true,
                            maxdist: "2000"
                        }
                    },
                    {
                        type: "M",
                        mode: "FBT",
                        meta: "foot_speed_normal"
                    },
                    {
                        type: "P",
                        mode: "FB",
                        profile: {
                            type: "B",
                            enabled: false,
                            maxdist: "0"
                        }
                    },
                    {
                        type: "M",
                        mode: "FBT",
                        meta: "bike_speed_normal"
                    }
                ],
                getPolyline: false,
                outFrwd: true,
                outTime: "121304",
                outDate: "20240621",
                getPasslist: true,
                getTariff: true
            },
            id: "1|32|"
        }
    ]
});