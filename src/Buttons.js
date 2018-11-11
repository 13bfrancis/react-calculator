import React from 'react';
import styled from 'styled-components';

const ButtonLayout = styled.div`
  height: 70%;
  flex-basis: 100%;
`;
const Button = styled.button`
  flex-basis: ${100 / 4}%;
  flex-grow: 1;
  width: ${100 / 4}%;
  height: 25%;
`;
const WideButton = styled(Button)`
  flex-basis: ${100 / 2}%;
  width: ${100 / 2}%;
`;

export default ({ solveEquation, setScreen, setOperator, setAC }) => (
  <ButtonLayout>
    {/* Row 1 */}
    <WideButton onClick={setAC}>Clear</WideButton>
    <Button onClick={setOperator('x')}>x</Button>
    <Button onClick={setOperator('+')}>+</Button>

    {/* Row 2 */}
    <Button onClick={setScreen('7')}>7</Button>
    <Button onClick={setScreen('8')}>8</Button>
    <Button onClick={setScreen('9')}>9</Button>
    <Button onClick={setOperator('-')}>-</Button>

    {/* Row 3 */}
    <Button onClick={setScreen('4')}>4</Button>
    <Button onClick={setScreen('5')}>5</Button>
    <Button onClick={setScreen('6')}>6</Button>
    <Button onClick={setOperator('/')}>/</Button>

    {/* Row 4 */}
    <Button onClick={setScreen('1')}>1</Button>
    <Button onClick={setScreen('2')}>2</Button>
    <Button onClick={setScreen('3')}>3</Button>
    <Button onClick={solveEquation}> = </Button>
  </ButtonLayout>
);
