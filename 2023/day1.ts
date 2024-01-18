import { BunFile } from "bun";

const file = Bun.file("./2023/day1.txt");

async function process(file: BunFile) {
  const input = await file.text();
  const lines = input.split("\n");
  const result = solve(lines);
  console.log(result);
}

const letterDigits = new Map<string, number>([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["four", 4],
  ["five", 5],
  ["six", 6],
  ["seven", 7],
  ["eight", 8],
  ["nine", 9],
]);

const isLetterDigit = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;
const isNumber = /\d/;

function solve(lines: string[]) {
  let lineSums = [];
  for (const line of lines) {
    const values: (string | number)[] = [];

    const matches = line.matchAll(isLetterDigit);
    for (const match of matches) {
      if (isNumber.test(match[1])) {
        values.push(parseInt(match[1], 10));
      } else {
        values.push(letterDigits.get(match[1]));
      }
    }

    values.length
      ? lineSums.push(parseInt(`${values[0]}${values[values.length - 1]}`, 10))
      : null;
  }
  console.log(lineSums.reduce((a, b) => a + b, 0));
}

process(file);
