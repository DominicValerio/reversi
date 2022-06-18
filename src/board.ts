const COLS = 8;
const ROWS = 8;

export enum Color {
  None,
  Black,
  White,
}

export class Board {
  value: number[][]
  constructor() {
    this.value = []
    for (let i = 0; i < ROWS; i++) {
      let arr = new Array(COLS)
      for (let j = 0; j < COLS; j++) {
        arr[j] = Color.None
      }
      this.value[i]=arr
    }
  }

  toString() {
    let res = ""
    for (const arr of this.value) {
      for(const v of arr) {
        res += `${v} `
      }
      res += "\n";
    }
    return res;
  }
}