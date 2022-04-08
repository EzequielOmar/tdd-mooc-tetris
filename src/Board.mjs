export class Board {
  width;
  height;
  boardMap = [];

  constructor(width, height) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.drawEmptyBoard();
  }

  toString() {
    let boardStr = "";
    for (let i = 0; i < this.boardMap.length; i++) {
      boardStr += this.boardMap[i].join("") + "\n";
    }
    return boardStr;
  }

  //drop(block) {}

  //  tick() {}

  /*DECOUPLED FUNCTIONS*/
  drawEmptyBoard() {
    if (this.width && this.height)
      for (let i = 0; i < this.height; i++) {
        this.boardMap.push(".".repeat(this.width).split(""));
      }
    else throw new Error("No width/height provided.");
  }
}
