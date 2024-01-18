import fs from "fs";
import rl from "readline";

export class FileReader {
  data: rl.Interface;
  constructor(private readonly file: string) {
    this.data = rl({
      input: fs.createReadStream(this.file),
      output: process.stdout,
      terminal: false,
    });
  }

  processLines(fn: (line: string) => void) {
    this.data.on("line", fn);
  }
}
