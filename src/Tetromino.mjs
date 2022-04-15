import { RotatingShape } from "./RotatingShape.mjs";

export const Tetromino = {
  T_SHAPE: () =>
    new RotatingShape(`
       .T.
       TTT
       ...`),

  I_SHAPE: new RotatingShape(`
       .....
       .....
       IIII.
       .....
       .....`),

  O_SHAPE: new RotatingShape(`
       .OO
       .OO
       ...`),

  T_SHAPE: new RotatingShape(` 
       .T.
       TTT
       ...`),

  T_SHAPE: new RotatingShape(`.T.
       TTT
       ...`),

  T_SHAPE: new RotatingShape(`.T.
       TTT
       ...`),
};
