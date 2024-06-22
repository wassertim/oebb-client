import { ProductBits, generateJourneyFilter } from './journey-filter.generator';

describe('generateJourneyFilter', () => {
    it('should generate the correct JourneyFilter for selected toggles', () => {
        const selectedToggles = [ProductBits.LongDistanceTrains, ProductBits.Buses];
        const expectedValue = 12357;
        const result = generateJourneyFilter(selectedToggles);

        expect(result).toEqual({
            type: "PROD",
            mode: "INC",
            value: expectedValue
        });
    });

    it('should return 0 if no toggles are selected', () => {
        const selectedToggles = [];
        const result = generateJourneyFilter(selectedToggles);

        expect(result).toEqual({
            type: "PROD",
            mode: "INC",
            value: 0
        });
    });

    it('should combine multiple toggles correctly', () => {        
        const selectedToggles = [ProductBits.LongDistanceTrains, ProductBits.Buses, ProductBits.SBahn];
        const expectedValue = 12389
        const result = generateJourneyFilter(selectedToggles);

        expect(result).toEqual({
            type: "PROD",
            mode: "INC",
            value: expectedValue
        });
    });

    it('should generate the correct JourneyFilter', () => {        
        const selectedToggles = [ProductBits.LongDistanceTrains];
        const expectedValue = 12293;

        const result = generateJourneyFilter(selectedToggles);

        expect(result).toEqual({
            type: "PROD",
            mode: "INC",
            value: expectedValue
        });
    });
});