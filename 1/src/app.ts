import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function processFileLineByLine(filePath: string): Promise<void> {
    const fileStream = createReadStream(filePath);

    const rl = createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    for await (const line of rl) {
        console.log(`Line from file: ${line}`);
    }
}

// Example usage
const filePath = 'src/day1.txt';
processFileLineByLine(filePath).catch(console.error);