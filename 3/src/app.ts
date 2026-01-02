import { createReadStream } from 'fs';
import { createInterface } from 'readline';

// Summary of the problem 1:
// each line is of digits is a single bank of batteries
// turn on exactly two batteries such that the sum of their charge levels is maximized
// find the maximum sum of possible of each bank; what is the total maximum sum of all banks?

async function processFile(filePath: string): Promise<number> {
    const fileStream = createReadStream(filePath);
    const rl = createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    let totalMaxSum = 0;

    for await (const line of rl) {
      const charges = line.split('').map(Number);
      if (charges.length < 2) continue;

      // Find the two largest charges
      let max1 = -Infinity, max2 = -Infinity;
      for (const charge of charges) {
        if (charge > max1) {
          max2 = max1;
          max1 = charge;
        } else if (charge > max2) {
          max2 = charge;
        }
      }

      totalMaxSum += (max1 + max2);
    }

    return totalMaxSum;
}

// Example usage
processFile('src/day3.txt').then(total => {
    console.log(`Total maximum sum of all banks: ${total}`);
}).catch(err => {
    console.error(`Error processing file: ${err}`);
});