import React from 'react'
import styled from 'styled-components'
import { UseDisplay } from './DispalyContex/DisplayContext'

const SubDisplayStyled = styled.section`
  position: absolute;
  width: 29rem;
  right: 4%;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
  text-align: right;
  font-family: 'Codystar', cursive;
  font-size: 3rem;
  color: #FEC260;
`

export default function SubDisplay() {

  const { currentValue } = UseDisplay();

  return <SubDisplayStyled>
    <h4>{currentValue}</h4>
  </SubDisplayStyled>
}