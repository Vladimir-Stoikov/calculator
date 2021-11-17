import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const SumButton = styled.section`
  position: absolute;
  right: 73%;
  bottom: 15%;
`


export default function Sum() {

  const { sum } = UseDisplay();

  return <SumButton>
    <Ceil name='+' ceilFunc={ sum }/>
    </SumButton>
}