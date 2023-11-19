import {Goodie, Problem2} from "./problem2";

jest.mock('fs');

const fs = require('fs');

describe('Problem2', () => {

    describe('distributeGoodies', () => {
        it('read and write to the output file', () => {
            fs.readFileSync.mockReturnValue(`Number of employees: 2\nGoodie1: 100\nGoodie2: 200`);
            fs.writeFileSync.mockImplementation(() => {});

            const inputFilePath = 'path/to/input.txt';
            const outputFilePath = 'path/to/output.txt';

            Problem2.distributeGoodies(inputFilePath, outputFilePath);

            expect(fs.readFileSync).toHaveBeenCalledWith(inputFilePath, 'utf-8');
            expect(fs.writeFileSync).toHaveBeenCalledWith(outputFilePath, 'The goodies selected for distribution are:\n' +
                'Goodie1: 100\n' +
                'Goodie2: 200\n' +
                'And the difference between the chosen goodie with highest price and the lowest price is 100');
        });
    });

    describe('calculateDistributeGoodies', () => {
        it('should correctly distribute goodies to minimize price difference', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 100 },
                { name: "Goodie2", price: 200 },
                { name: "Goodie3", price: 300 },
            ];
            const employees = 2;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(employees);
            expect(minDifference).toBe(100);
        });

        it('should correctly distribute goodies if we have one goodie', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 100 },
            ];
            const employees = 2;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(1);
            expect(minDifference).toBe(0);
        });

        it('should correctly distribute goodies if we have no goodie', () => {
            const goodies: Goodie[] = [];
            const employees = 2;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(0);
            expect(minDifference).toBe(0);
        });

        it('should correctly distribute goodies if we have no employees', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 100 },
                { name: "Goodie2", price: 200 },
                { name: "Goodie3", price: 300 },
            ];
            const employees = 0;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(0);
            expect(minDifference).toBe(0);
        });

        it('should correctly distribute goodies if goodies less than employees', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 100 },
                { name: "Goodie2", price: 200 },
                { name: "Goodie3", price: 300 },
            ];
            const employees = 4;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(3);
            expect(minDifference).toBe(200);
        });

        it('should correctly distribute goodies if goodies have same prices', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 100 },
                { name: "Goodie4", price: 300 },
                { name: "Goodie2", price: 200 },
                { name: "Goodie3", price: 300 },
                { name: "Goodie5", price: 300 },
            ];
            const employees = 4;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(4);
            expect(minDifference).toBe(200);
        });

        it('should correctly distribute goodies if goodies have same minimum prices', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 300 },
                { name: "Goodie4", price: 100 },
                { name: "Goodie2", price: 200 },
                { name: "Goodie3", price: 100 },
                { name: "Goodie5", price: 200 },
            ];
            const employees = 4;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(4);
            expect(minDifference).toBe(100);
        });

        it('should correctly distribute goodies if goodies have multiple same prices', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 300 },
                { name: "Goodie2", price: 100 },
                { name: "Goodie3", price: 200 },
                { name: "Goodie4", price: 100 },
                { name: "Goodie5", price: 200 },
                { name: "Goodie6", price: 300 },
                { name: "Goodie7", price: 100 },
                { name: "Goodie8", price: 200 },
                { name: "Goodie9", price: 100 },
                { name: "Goodie10", price: 200 },
            ];
            const employees = 5;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(5);
            expect(minDifference).toBe(100);
        });

        it('should correctly distribute goodies if goodies have multiple same prices and selected price diff is zero', () => {
            const goodies: Goodie[] = [
                { name: "Goodie1", price: 300 },
                { name: "Goodie2", price: 100 },
                { name: "Goodie3", price: 200 },
                { name: "Goodie4", price: 100 },
                { name: "Goodie5", price: 200 },
                { name: "Goodie6", price: 300 },
                { name: "Goodie7", price: 100 },
                { name: "Goodie8", price: 200 },
                { name: "Goodie9", price: 100 },
                { name: "Goodie10", price: 200 },
            ];
            const employees = 4;
            const [selectedGoodies, minDifference] = Problem2.calculateDistributeGoodies(goodies, employees);

            expect(selectedGoodies).toHaveLength(4);
            expect(minDifference).toBe(0);
        });
    });
})
