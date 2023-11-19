import {Job, Problem1} from "./problem1";

describe('Problem1', () => {

    it('should correctly calculate remaining jobs and earnings when hours', () => {
        const jobs: Job[] = [
            {start: '0900', end: '1030', profit: 100},
            {start: '1000', end: '1200', profit: 500},
            {start: '1100', end: '1200', profit: 300},
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([2, 400]);
    });

    it('should correctly calculate remaining jobs and earnings when minutes overlapped', () => {
        const jobs: Job[] = [
            {start: '0950', end: '0959', profit: 100},
            {start: '0945', end: '0955', profit: 500},
            {start: '0940', end: '0954', profit: 300},
            {start: '0920', end: '0930', profit: 200},
        ];
        expect(Problem1.maxProfit(jobs)).toEqual([2, 400]);
    });

    it('should correctly calculate remaining jobs and earnings when minutes overlapped equally', () => {
        const jobs: Job[] = [
            {start: '0955', end: '0959', profit: 100},
            {start: '0945', end: '0955', profit: 500},
            {start: '0940', end: '0945', profit: 300},
            {start: '0920', end: '0930', profit: 200},
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([2, 400]);
    });

    it('should correctly calculate remaining jobs and earnings when more than one overlapped toke place', () => {
        const jobs: Job[] = [
            {start: '1000', end: '1100', profit: 300},
            {start: '1000', end: '1015', profit: 100},
            {start: '1016', end: '1030', profit: 100},
            {start: '1031', end: '1045', profit: 100},
            {start: '1046', end: '1100', profit: 100},
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([1, 300]);
    });

    it('should correctly calculate remaining jobs and earnings if only two jobs', () => {
        const jobs: Job[] = [
            {start: '0955', end: '0959', profit: 100},
            {start: '0945', end: '0954', profit: 500},
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([0, 0]);
    });

    it('should correctly calculate remaining jobs and earnings if only two jobs overlapped', () => {
        const jobs: Job[] = [
            {start: '0955', end: '0959', profit: 100},
            {start: '0945', end: '0955', profit: 500},
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([1, 100]);
    });

    it('should correctly calculate remaining jobs and earnings', () => {
        const jobs: Job[] = [
            {start: '0900', end: '1030', profit: 100},
            {start: '1000', end: '1200', profit: 100},
            {start: '1100', end: '1200', profit: 100}
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([1, 100]);
    });

    it('should return 0 if no jobs', () => {
        const jobs: Job[] = [];

        expect(Problem1.maxProfit(jobs)).toEqual([0, 0]);
    });

    it('should return 0 if single jobs', () => {
        const jobs: Job[] = [
            {start: '0900', end: '1030', profit: 100},
        ];

        expect(Problem1.maxProfit(jobs)).toEqual([0, 0]);
    });

})
