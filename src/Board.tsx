import React from "react";

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

class Piece extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }

  getColor(): string {
    switch (this.props.color) {
      case Color.Black: return "black"
      case Color.White: return "white"
      default: return "none"
    }
  }

  render() {
    return (
      <>
      <div id="square"><button className="piece" id={this.getColor()}></button></div>
      </>
    )
  }
}

export class CBoard extends React.Component<any> {
  board: Board
  constructor(props: any) {
    super(props)
    this.board = new Board()
  }
  render() {
    let res: any = []
    for(const arr of this.board.value) {
      for(const c of arr) {
        res.push(<Piece color={c}/>)
      }
      res.push(<br/>)
    }


    return (
      <div id="board">
        {res}
      </div>
    )
  }
}