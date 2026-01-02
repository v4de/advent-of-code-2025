import { createReadStream } from 'fs';
import { createInterface } from 'readline';

// Summary of the problem 1:
// Id ranges are separated by commas
// Each range is two numbers separated by a hyphen
// You can find invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice
// 55 is 5 twice
// 6464 is 64 twice
// 123123 is 123 twice
// Find all the invalid IDs and add them together

function findInvalidIds(filePath: string) {
  const fileStream = createReadStream(filePath);

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  rl.on('line', (line: string) => {

  });

  return new Promise<void>((resolve) => {
    rl.on('close', () => {
      resolve();
    });
  });
}

// Example usage
const filePath = 'src/day2.txt';
findInvalidIds(filePath).catch(console.error);