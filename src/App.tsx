import React from 'react';
import './App.css';
import {Color, Board} from './board';

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
      <Piece color={Color.White}/><Piece color={Color.White}/>
    </div>
  );
}

export default App;
