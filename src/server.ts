// src/server.ts
import express from 'express';
import path from 'path';
import { mapTripData } from './mapper';
import { getConnections as searchTrip } from './oebb.service';
import { getTripSearchRequest } from './request.builder';
import { withCache } from './util/cache';
import { ProductBits, generateJourneyFilter } from './journey-filter.generator';

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define the route
app.get('/', async (req, res) => {
    try {
        const meansOfTransport = [ProductBits.SBahn, ProductBits.RegionalTrains, ProductBits.LongDistanceTrains];
        let data = await withCache(searchTrip, true)(getTripSearchRequest(generateJourneyFilter(meansOfTransport)));
        const polyLine = data.svcResL[0].res.common.polyL;
        console.log(JSON.stringify(polyLine, null, 4));
        const tripData = mapTripData(data.svcResL[0].res);
        res.render('index', { tripData, polyLine: polyLine });
    } catch (error) {
        res.status(500).send('Error occurred: ' + error);
    }
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});