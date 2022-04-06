export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  toString() {
    if (this.width && this.height) {
      this.width = parseInt(this.width);
      this.height = parseInt(this.height);
      let stringBoard = "";
      for (let i = 0; i < this.height; i++) {
        stringBoard += ".".repeat(this.width);
        stringBoard += "\n";
      }
      return stringBoard;
    }
    throw new Error("No width/height provided.");
  }
}
