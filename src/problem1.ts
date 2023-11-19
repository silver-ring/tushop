export type Job = {
    start: string;
    end: string;
    profit: number;
}

export class Problem1 {

    static maxProfit(jobs: Job[]): [number, number] {

        // handle basic cases
        if (jobs.length == 0 || jobs.length === 1) {
            return [0, 0]
        }

        // sort the elements based on end time, so we be able to calculate time overlaps
        jobs.sort((a, b) => parseInt(a.end) - parseInt(b.end))

        // initialize variables to store needed results between each iteration
        const profits: number[] = [jobs[0].profit]
        let totalProfits = jobs[0].profit
        let selectedJobs = 1

        // iterate throw jobs and calculate maximum profile possible
        for (let i= 1; i < jobs.length; i++) {

            totalProfits += jobs[i].profit;

            // Find the last non-overlapped job to compare the best results between
            // including current item to results and exclude the item from results
            let lastNonOverlappedIndex = -1
            for (let j= i - 1; j >= 0; j--) {
                if (parseInt(jobs[j].end) < parseInt(jobs[i].start)) {
                    lastNonOverlappedIndex = j
                    break;
                }
            }

            let profitWithCurrentJob = jobs[i].profit

            // calculate the possible profit since last none overlapped item
            if (lastNonOverlappedIndex !== -1) {
                profitWithCurrentJob += profits[lastNonOverlappedIndex];
            }

            // check if we should exclude current item from the result, or we should include the item to results
            if (profits[profits.length - 1] < profitWithCurrentJob) {
                // if we will include the item to the result we calculate selected items based on last non overlapped
                // item index + current item, we add 1 to convert from zero index based to a count (ex. 1,2,3,4 etc.)
                selectedJobs = lastNonOverlappedIndex + 2
                profits.push(profitWithCurrentJob)
            } else {
                profits.push(profits[profits.length - 1])
            }

        }

        return [jobs.length - selectedJobs, totalProfits - profits[profits.length - 1]]

    }
}
