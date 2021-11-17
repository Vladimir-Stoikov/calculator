import React from 'react'
import styled from 'styled-components'
import Buttons from './components/Buttons'
import Display from './components/Display'
import SubDisplay from './components/SubDisplay'
import DisplayContent from './components/DispalyContex/DisplayContext'
import Clear from './components/Functional/Clear'
import Delete from './components/Functional/Delete'
import Sum from './components/Functional/Sum'
import Equals from './components/Functional/Equals'
import Subtraction from './components/Functional/Subtraction' 
import Mult from './components/Functional/Mult' 
import Division from './components/Functional/Division' 

const CalcStyled = styled.main`
  position: relative;
  background-color: #A12568;
  width: 500px;
  height: 700px;
  border-radius: 20px;
`

export const displayValue = React.createContext();

function Calculator() {
   
  return <CalcStyled>
    <DisplayContent>
      <Display />
      <SubDisplay />
      <Buttons />
      <Clear />
      <Delete />
      <Sum />
      <Equals />
      <Subtraction />
      <Mult />
      <Division />
    </DisplayContent>
  </CalcStyled>
}

export default Calculator;