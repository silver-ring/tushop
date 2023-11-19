export type Job = {
    start: string;
    end: string;
    profit: number;
}

export class Problem1 {

    static maxProfit(jobs: Job[]): [number, number] {


        if (jobs.length == 0 || jobs.length === 1) {
            return [0, 0]
        }


        jobs.sort((a, b) => parseInt(a.end) - parseInt(b.end))

        const profits: number[] = [jobs[0].profit]
        let totalProfits = jobs[0].profit
        let selectedJobs = 1

        for (let i= 1; i < jobs.length; i++) {

            totalProfits += jobs[i].profit;

            // Find the last non-overlapped job
            let lastNonOverlappedIndex = -1
            for (let j= i - 1; j >= 0;j--) {
                if (parseInt(jobs[j].end) < parseInt(jobs[i].start)) {
                    lastNonOverlappedIndex = j
                    break;
                }
            }

            let profitWithCurrentJob = jobs[i].profit

            if (lastNonOverlappedIndex !== -1) {
                profitWithCurrentJob += profits[lastNonOverlappedIndex];
            }

            if (profits[profits.length - 1] < profitWithCurrentJob) {
                selectedJobs = lastNonOverlappedIndex + 2
                profits.push(profitWithCurrentJob)
            } else {
                profits.push(Math.max(profits[profits.length - 1]))
            }

        }

        return [jobs.length - selectedJobs, totalProfits - profits[profits.length - 1]]

    }
}
