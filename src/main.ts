import { Job, Problem1 } from "./problem1";
import inquirer from 'inquirer';
import fs from "fs";
import {Problem2} from "./problem2";

async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'problem',
                message: 'Which problem do you want to solve?',
                choices: ['Problem 1', 'Problem 2'],
            }
        ]);

        if (answers.problem === 'Problem 1') {
            await solveProblem1();
        } else if (answers.problem === 'Problem 2') {
            await solveProblem2();
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

async function solveProblem1(): Promise<void> {
    try {
        const { numJobs } = await inquirer.prompt({
            type: 'input',
            name: 'numJobs',
            message: 'Enter the number of Jobs',
            filter: (input) => parseInt(input, 10),
            validate: (input) => !isNaN(parseInt(input, 10)) || 'Please enter a valid number'
        });

        let jobs: Job[] = [];

        for (let i = 0; i < numJobs; i++) {
            const jobInfo = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'startTime',
                    message: `Enter job ${i + 1} start time (HHMM): `,
                },
                {
                    type: 'input',
                    name: 'endTime',
                    message: `Enter job ${i + 1} end time (HHMM): `,
                },
                {
                    type: 'input',
                    name: 'profit',
                    message: `Enter job ${i + 1} earnings: `,
                    filter: (input) => parseInt(input, 10),
                    validate: (input) => !isNaN(parseInt(input, 10)) || 'Please enter a valid number'
                }
            ]);

            jobs.push({
                start: jobInfo.startTime,
                end: jobInfo.endTime,
                profit: jobInfo.profit
            });
        }

        // Process the jobs and calculate the result
        const [remainingJobs, earnings] = Problem1.maxProfit(jobs);

        // Output the result
        console.log(`The number of tasks and earnings available for others`);
        console.log(`Tasks: ${remainingJobs}`);
        console.log(`Earnings: ${earnings}`);

    } catch (error) {
        console.error('Error:', error);
    }
}

async function solveProblem2(): Promise<void> {
    try {
        const { inputFile } = await inquirer.prompt({
            type: 'input',
            name: 'inputFile',
            message: 'Enter the path to the input file:',
            validate: (input) => fs.existsSync(input) || 'File does not exist. Please enter a valid file path'
        });

        const { outputFile } = await inquirer.prompt({
            type: 'input',
            name: 'outputFile',
            message: 'Enter the path for the output file:',
        });

        await Problem2.distributeGoodies(inputFile, outputFile);

        console.log(`Output written to ${outputFile}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
