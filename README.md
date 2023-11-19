
# Tushop Interview Application

## Introduction
Tushop Interview Application is a TypeScript-based console application designed to solve two distinct problems. It provides an interactive command-line interface for users to choose and solve specific problems.

## Installation

Before installing, ensure you have [Node.js](https://nodejs.org/) installed on your system.

### Using PNPM

If you don't have PNPM installed, you can install it globally using NPM:

```bash
npm install -g pnpm
```

### Setting Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repository/tushop.git
   cd tushop
   ```

2. **Install Dependencies**:
   Using PNPM, install the project dependencies:
   ```bash
   pnpm install
   ```

## Testing

To run tests, execute the following command:

```bash
pnpm test
```

This will run the unit tests defined for the application, verifying the functionality of the key components.

## Usage

To run the application, use the following command:

```bash
pnpm start
```

Upon starting the application, you will be prompted to choose which problem you want to solve.

## Problem 1

### Description
Problem 1 involves job scheduling to maximize profit. Users must input job details including start time, end time, and profit.

### Input Format
- Number of jobs.
- For each job:
  - Start time in HHMM format.
  - End time in HHMM format.
  - Profit as an integer.

### Output Format
- Number of remaining tasks.
- Total earnings available for other employees.

### Example
Input:
```
3
0900
1030
100
1000
1200
500
1100
1200
300
```
Output:
```
Tasks: 2
Earnings: 400
```

## Problem 2

### Description
Problem 2 focuses on distributing goodies among employees in a manner that minimizes the price difference between the highest and lowest-priced items.

### Input Format
- Input file containing:
  - Number of employees.
  - List of goodies and their prices.

### Output Format
- Output file containing:
  - The selected goodies for distribution.
  - The difference between the highest and lowest price of selected goodies.

### Example
Input File (sample_input.txt):
```
Number of employees: 4
Goodies and Prices:
Fitbit Plus: 7980
IPods: 22349
MI Band: 999
Cult Pass: 2799
Macbook Pro: 229900
Digital Camera: 11101
Alexa: 9999
Sandwich Toaster: 2195
Microwave Oven: 9800
Scale: 4999
```
Output File (sample_output.txt):
```
The goodies selected for distribution are:
Fitbit Plus: 7980
Microwave Oven: 9800
Alexa: 9999
Digital Camera: 11101
And the difference between the chosen goodie with highest price and the lowest price is 3121
```
