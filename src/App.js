import React, { Component } from 'react';
import Screen from './Screen';
import Buttons from './Buttons';

import styled from 'styled-components';

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: tan;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Calculator = styled.div`
  flex-basis: 30%;
  height: 85%;
  background: grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class App extends Component {
  state = {
    number1: Number,
    number2: Number,
    operator: '',
    screen: ''
  };
  setOperator = op => () => {
    if (this.state.screen === '') return;
    this.setState({
      operator: op,
      number1: parseInt(this.state.screen),
      screen: ''
    });
  };
  solveEquation = () => {
    if (this.state.operator === '') return;
    const { number1, operator, screen } = this.state;
    switch (operator) {
      case '+':
        this.setState({ screen: number1 + parseInt(screen) });
        break;
      case 'x':
        this.setState({ screen: number1 * parseInt(screen) });
        break;
      case '-':
        this.setState({ screen: number1 - parseInt(screen) });
        break;
      case '/':
        this.setState({ screen: number1 / parseInt(screen) });
        break;
      default:
        break;
    }
  };
  setScreen = character => () => {
    if (this.state.screen.length >= 9) return;
    this.setState({ screen: this.state.screen + character });
  };
  setAC = () => {
    this.setState({
      number1: Number,
      number2: Number,
      screen: '',
      operator: ''
    });
  };

  render() {
    return (
      <Backdrop>
        <Calculator>
          <Screen display={this.state.screen} />
          <Buttons
            setAC={this.setAC}
            setOperator={this.setOperator}
            setScreen={this.setScreen}
            solveEquation={this.solveEquation}
          />
        </Calculator>
      </Backdrop>
    );
  }
}

export default App;
