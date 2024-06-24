// src/server.ts
import express from 'express';
import path from 'path';
import { mapTripData } from './mapper';
import { getConnections as searchTrip } from './oebb.service';
import { getTripSearchRequest } from './request.builder';
import { withCache } from './util/cache';
import { ProductBits, generateJourneyFilter } from './journey-filter.generator';
import polyline from '@mapbox/polyline';

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define the route
app.get('/', async (req, res) => {
    try {
        const meansOfTransport = [ProductBits.SBahn, ProductBits.RegionalTrains, ProductBits.LongDistanceTrains];
        const data = await withCache(searchTrip, true)(getTripSearchRequest(generateJourneyFilter(meansOfTransport)));

        
        // Decode the polylines for each section
        const sections = data.svcResL[0].res.outConL[0].secL.map((section: any) => {
            return section.jny.polyG.polyXL.map((polyIndex: number) => {    
                if (!data.svcResL[0].res.common.polyL) {
                    throw new Error('No polyline data found');
                }            
                return polyline.decode(data.svcResL[0].res.common.polyL[polyIndex].crdEncYX);
            });
        });

        const tripData = mapTripData(data.svcResL[0].res);

        res.render('index', { tripData, sections });
    } catch (error) {
        res.status(500).send('Error occurred: ' + error);
    }
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});