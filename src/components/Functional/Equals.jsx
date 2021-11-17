import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const EqualsButton = styled.section`
  position: absolute;
  right: 3.5%;
  bottom: 3%;
`


export default function Equals() {

  const { equals } = UseDisplay();

  return <EqualsButton>
    <Ceil name='=' ceilFunc={equals} props={{width: '450px'}}/>
    </EqualsButton>
}