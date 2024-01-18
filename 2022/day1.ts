import fs from "fs";

const reader = fs.readFileSync("day1.txt", "utf-8");

const elves = reader.split("\n\n");
const groupedSum = elves.map((elf) => {
  return elf
    .split("\n")
    .map((food) => parseInt(food, 10))
    .reduce((total, food) => total + food, 0);
});

const max = Math.max(...groupedSum);
console.log({ max });

const totalTop3 = groupedSum
  .sort((elfA, elfB) => elfB - elfA)
  .slice(0, 3)
  .reduce((t, e) => t + e, 0);

console.log({ totalTop3 });
