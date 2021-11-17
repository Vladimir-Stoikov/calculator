import React from 'react'
import styled from 'styled-components'
import Ceil from './Ceil'
import { UseDisplay } from './DispalyContex/DisplayContext'

const StyledNumbers = styled.section`
position: absolute;
bottom: 15%;
right: -2%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 80%;
`

function Buttons() {

  const { numberClick } = UseDisplay();

  const numbers = new Array(10).fill('');

  return <StyledNumbers>
    {numbers.map((_, num) => <Ceil key={num} ceilFunc={(e) => numberClick(e.target.textContent)} name={num}/>)}
  </StyledNumbers>
}

export default Buttons;