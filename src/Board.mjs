export class Board {
  width;
  height;
  //private
  #boardMap = [];
  #falling = false;
  #fallingPos = { x: undefined, y: undefined };

  constructor(width, height) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    this._drawEmptyBoard();
  }

  toString() {
    let boardStr = "";
    for (let i = 0; i < this.#boardMap.length; i++) {
      boardStr += this.#boardMap[i].join("") + "\n";
    }
    return boardStr;
  }

  drop(block) {
    if (this.#falling) throw new Error("already falling");
    else {
      this.#falling = true;
      let middle =
        this.height % 2 === 1 ? (this.height - 1) / 2 : this.height / 2;
      if (this.#boardMap[0][middle] === ".") {
        this.#boardMap[0][middle] = block.color;
        this.#fallingPos.x = 0;
        this.#fallingPos.y = middle;
      } else throw new Error("kind`a loos");
    }
  }

  //  tick() {}

  /*DECOUPLED PRIVATE FUNCTIONS*/
  _drawEmptyBoard() {
    if (this.width && this.height)
      for (let i = 0; i < this.height; i++) {
        this.#boardMap.push(".".repeat(this.width).split(""));
      }
    else throw new Error("No width/height provided.");
  }
}
