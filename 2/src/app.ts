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

async function findInvalidIds(filePath: string): Promise<number> {
  let sum = 0;

  const fileStream = createReadStream(filePath);
  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const idRanges = line.split(',').map(id => id.trim());

    for await (const idRange of idRanges) {
      const [startStr, endStr] = idRange.split('-').map(part => part.trim());
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);

      const ids = range(start, end);
      for await (const id of ids) {
        if (isInvalidId(id.toString())) {
          sum += id;
          console.log(`Invalid ID found: ${id}`);
        }
      }
    }
  };
  return sum
}

function isInvalidId(id: string) {
  const len = id.length;
  if (len % 2 !== 0) {
    return false;
  }
  const half = len / 2;
  const firstHalf = id.substring(0, half);
  const secondHalf = id.substring(half);
  return firstHalf === secondHalf;
}

function range(start: number, end: number) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// Example usage
const filePath = 'src/day2.txt';
console.log("Sum of invalid IDs:", await findInvalidIds(filePath).catch(console.error));