import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const SubtractionButton = styled.section`
  position: absolute;
  right: 73%;
  bottom: 27.2%;
`


export default function Subtraction() {

  const { sub } = UseDisplay();

  return <SubtractionButton>
    <Ceil name='-' ceilFunc={ sub }/>
    </SubtractionButton>
}