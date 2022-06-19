import React, {Component, useState} from "react";

const COLS = 8;
const ROWS = 8;

export enum Color {
  None,
  Black,
  White,
}

export class Board {
  turn: Color
  value: number[][]
  constructor() {
    this.turn = Color.Black;
    // setup board
    let res = []
    for (let i = 0; i < ROWS; i++) {
      let arr = new Array(COLS)
      for (let j = 0; j < COLS; j++) {
        arr[j] = Color.None
      }
      res[i]=arr
    }
    // set the beginning pieces
    res[3][4] = Color.White;
    res[4][3] = Color.White

    res[3][3] = Color.Black;
    res[4][4] = Color.Black;
    this.value = res

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

// change a piece then return what it is
function changePiece(piece: Piece): Color {
  piece.board.value[0][0] = Color.Black

  return Color.White
}

function handleChange(board: Board, piece: Piece) {
  let ref = board.value

  let row = piece.row
  let col = piece.col
  ref[row][col] = Color.Black
}

class Piece extends React.Component<any> {
  row: number;
  col: number;
  board: Board;

  constructor(props: any) {
    super(props)

    this.row = props.row;
    this.col = props.col;
    this.board = props.board;
    this.state = {color: props.color};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e: any) {
    e.preventDefault()
    console.log('here')
    this.setState(prevState => ({
      color: changePiece(this)
    }))
  }

  getColor(): string {
    const state = this.state as any
    switch (state.color) {
      case Color.Black: return "black"
      case Color.White: return "white"
      default: return "none"
    }
  }

  render() {
    return (
      <div id="square"><button className="piece" id={this.getColor()} onClick={this.handleClick}></button></div>
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
    for(let i = 0; i < this.board.value.length; i++) {
      const arr = this.board.value[i]
      for(let j = 0; j < arr.length; j++) {
        const c = arr[j]
        res.push(<Piece color={c} row={i} col={j} board={this.board}/>)
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