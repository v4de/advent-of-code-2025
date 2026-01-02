import { createReadStream } from 'fs';
import { createInterface } from 'readline';

// Summary of the problem:
// dial is 0 - 99
// dial starts at 50
// if 11, R8 = 19
// if 19, L19 = 0
// if 0, L1 = 99
// if 99, R1 = 0
// if 5, L10 = 95
// if 95, R5 = 0
// count the number of times rotation stops at 0

function processRotations(filePath: string) {
  let dial = 50;
  let zeroCount = 0;

  const fileStream = createReadStream(filePath);

  const rl = createInterface({
      input: fileStream,
      crlfDelay: Infinity
  });

  rl.on('line', (line: string) => {
    const rotations = line.split(',').map(rot => rot.trim());

    for (const rotation of rotations) {
      const direction = rotation.charAt(0);
      const amount = parseInt(rotation.slice(1), 10);

      if (direction === 'R') {
        dial = (dial - amount + 100) % 100;
      } else if (direction === 'L') {
        dial = (dial + amount) % 100;
      }

      if (dial === 0) {
        zeroCount++;
      }
    }

    console.log(`Final dial position: ${dial}`);
  });
    console.log(`Times at 0: ${zeroCount}`);
    return new Promise<void>((resolve) => {
      rl.on('close', () => {
        resolve();
      });
    });
}

// Example usage
const filePath = 'src/day1.txt';
processRotations(filePath).catch(console.error);