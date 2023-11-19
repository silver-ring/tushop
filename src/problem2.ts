import fs from 'fs';

export type Goodie = {
    name: string;
    price: number;
};

export class Problem2 {

    private static readGoodiesFromFile(filePath: string): { employees: number, goodies: Goodie[] } {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');

        const employeesLine = lines.shift();
        const employees = parseInt(employeesLine?.split(':')[1].trim() || '0');

        const goodies = lines
            .filter(line => line.includes(':'))
            .map(line => {
                const [name, price] = line.split(':');
                return { name: name.trim(), price: parseInt(price.trim()) };
            });

        return { employees, goodies };
    }

    private static writeOutputToFile(filePath: string, selectedGoodies: Goodie[], minDifference: number): void {
        let output = 'The goodies selected for distribution are:\n';
        selectedGoodies.forEach(goodie => {
            output += `${goodie.name}: ${goodie.price}\n`;
        });
        output += `And the difference between the chosen goodie with highest price and the lowest price is ${minDifference}`;

        fs.writeFileSync(filePath, output);
    }

    static calculateDistributeGoodies(goodies: Goodie[], employees: number): [Goodie[], number] {

        // handle basic cases
        if (goodies.length === 0 || employees === 0) {
            return [[], 0];
        }

        if (goodies.length === 1) {
            return [goodies, 0];
        }

        // sort goodies based on price to exclude combinations which provide invalid solutions to reduce number of
        // possible solutions
        goodies.sort((a, b) => a.price - b.price)

        // handle basic cases
        if (goodies.length <= employees) {
            return [goodies, goodies[goodies.length -1].price - goodies[0].price]
        }

        let minDiff = Infinity
        let chosenGoodies: Goodie[] = []

        for (let i= 0; i < goodies.length - employees; i++) {
            // calculate price difference for window of number of employees
            const diff = goodies[i + employees -1].price - goodies[i].price

            // check if the window price difference is higher than the minimum price calculated
            if (diff < minDiff) {
                minDiff = diff
                chosenGoodies = goodies.slice(i, i + employees)
            }
        }

        return [chosenGoodies, minDiff]
    }

    static distributeGoodies(inputFilePath: string, outputFilePath: string) {
        const { employees, goodies } = Problem2.readGoodiesFromFile(inputFilePath)
        const [ selectedGoodies, minDifference ] = Problem2.calculateDistributeGoodies(goodies, employees)
        Problem2.writeOutputToFile(outputFilePath, selectedGoodies, minDifference)
    }

}
