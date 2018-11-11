import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  flex-basis: 100%;
  height: 30%;
  background: black;
  color: green;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 15px;
  font-size: 5vw;
`;
export default ({ display }) => (
  <>
    <Display>{display}</Display>
  </>
);
