export class Board {
  width;
  height;
  stringBoard = "";

  constructor(width, height) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.drawEmptyBoard();
  }

  toString() {
    return this.stringBoard;
  }

  drawEmptyBoard() {
    if (this.width && this.height)
      for (let i = 0; i < this.height; i++) {
        this.stringBoard += ".".repeat(this.width);
        this.stringBoard += "\n";
      }
    else throw new Error("No width/height provided.");
  }
}
