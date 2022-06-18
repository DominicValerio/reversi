import React from 'react';
import './App.css';
import {Color, Board, CBoard} from './Board';

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

function App() {
  return (
    <div className="App">
      <CBoard/>
    </div>
  );
}

export default App;
