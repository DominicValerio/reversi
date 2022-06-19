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

  at(tuple: [number, number]) {
    return this.value[tuple[0]][tuple[1]]
  }

  set(tuple: [number, number], value: Color) {
    this.value[tuple[0]][tuple[1]] = value
  }

  playMove(row: number, col: number) {

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
// function changePiece(piece: Piece): Color {
//   piece.board.value[0][0] = Color.Black

//   return Color.White
// }

class Piece extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }

  getColor(): string {
    const color = this.props.color
    switch (color) {
      case Color.Black: return "black"
      case Color.White: return "white"
      default: return "none"
    }
  }

  render() {
    return (
      <div id="square"><button className="piece" id={this.getColor()} onClick={this.props.handleClick}></button></div>
    )
  }
}

interface CBoardState {
  board: Board;
}

export class CBoard extends React.Component<any> {
  state: CBoardState

  constructor(props: any) {
    super(props)

    let board = new Board()
    this.state = {board}
  }

  handleClick(row: number, col: number) {
    this.state.board.playMove(row, col)
    let board = this.state.board
    this.setState({board})
  }

  render() {
    let children: any = []
    for(let i = 0; i < ROWS; i++) {
      const arr = this.state.board.value[i]
      for(let j = 0; j < COLS; j++) {
        const c = arr[j]
        children.push(<Piece color={c} handleClick={this.handleClick.bind(this, i, j)}/>)
      }
      children.push(<br/>)
    }   

    return (
      <div id="board">
        {children}
      </div>
    )
  }
}