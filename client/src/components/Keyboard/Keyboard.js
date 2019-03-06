import React, { Component } from "react";
import { Button } from "react-bootstrap";
import DataHandoff from "../DataHandoff";

let keyboard = {
  firstRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  secondRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  thirdRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm']
}

class Keyboard extends Component {
  state = this.props.passedData;

  consoleLog = () => {
    console.log("New keyboard is loading!")
    console.log(this.state)
  }

  // readBtnInput = (userGuess) => {
  //   console.log(userGuess.target.value);
  //   let btnInput = userGuess.target.value;

  //   if (this.state.wordtoguess.length > 0) {
  //     this.parseUserInput(btnInput);
  //   } else {
  //     console.log("The word has not loaded quite yet!")
  //   }
  // };

  render(){
    return (
      <div>{this.consoleLog()}
      
      <div id="keyboardWrapper">
        <div id="keyboard">
          <div className="keyboardRow">
            {keyboard.firstRow.map((letter, index) => (
              <Button key={letter} value={letter} onClickCapture={this.props.readBtn} className="keyboardBtn">
                {letter}
              </Button>
            ))}
          </div>
          <div className="keyboardRow">
            {keyboard.secondRow.map((letter, index) => (
              <Button key={letter} value={letter} onClickCapture={this.props.readBtn} className="keyboardBtn">
                {letter}
              </Button>
            ))}
          </div>
          <div className="keyboardRow">
            {keyboard.thirdRow.map((letter, index) => (
              <Button key={letter} value={letter} onClickCapture={this.props.readBtn} className="keyboardBtn">
                {letter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      </div>

    )
  }
}

export default Keyboard;






