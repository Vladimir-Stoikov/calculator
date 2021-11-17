import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const ClearButton = styled.section`
  position: absolute;
  right: 3.3%;
  bottom: 15%;
`


export default function Clear() {

  const { clear } = UseDisplay();

  return <ClearButton>
    <Ceil name='C' ceilFunc={clear}/>
    </ClearButton>
}