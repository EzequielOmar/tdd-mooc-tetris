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

  rotateRight() {
    this.#shape = this.#shape[0].map((val, index) =>
      this.#shape.map((row) => row[index]).reverse()
    );
    return this;
  }

  rotateLeft() {
    let aux = [];
    for (let i = this.#shape[0].length - 1; i >= 0; i--) {
      aux.push(this.#shape.map((row) => row[i]));
    }
    this.#shape = aux;
    return this;
  }

  _parseToArray(shape) {
    shape.split("\n").forEach((col) => {
      this.#shape.push(col.trim().split(""));
    });
  }
}
