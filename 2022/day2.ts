import fs from "fs";
const reader = fs.readFileSync("day1.txt", "utf-8");

const gameRounds = reader.split("\n");

const handScore: Record<string, number> = {
  A: 1, //rock
  X: 1, //rock
  B: 2, //paper
  Y: 2, //paper
  C: 3, //scissors
  Z: 3, //scissors
};

//score
// win: 6, draw: 3, lose: 0

const gameLogic: Record<string, (me: "Y" | "X" | "Z") => number> = {
  A: (me) => (me === "Y" ? handScore[me] : me === "Z" ? -1 : -1),
  B: (me) => (me === "Y" ? handScore[me] : me === ""),
};

const gameRule = (their: string, me: string) => {
  if (their === me) return handScore[me];
  // switch (their) {
  //   case "A":
  //     return gameLogic.A(me)
  // }
  return gameLogic[their](me);
};

gameRounds.reduce((total, round) => {
  const [opponent, _, me] = round.split(" ");
});
