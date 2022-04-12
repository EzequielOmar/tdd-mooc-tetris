export class RotatingShape {
  #shape = [];

  constructor(shape) {
    this._parseToArray(shape);
  }

  toString() {
    let shapeStr = "";
    for (let i = 0; i < this.#shape.length; i++) {
      shapeStr += this.#shape[i].join("") + "\n";
    }
    return shapeStr;
  }

  _parseToArray(shape) {
    shape.split("\n").forEach((col) => {
      this.#shape.push(col.trim().split(""));
    });
  }
}
