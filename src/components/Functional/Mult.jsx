import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const MultButton = styled.section`
  position: absolute;
  right: 73%;
  bottom: 39.6%;
`


export default function Mult() {

  const { mult } = UseDisplay();

  return <MultButton>
    <Ceil name='*' ceilFunc={ mult }/>
    </MultButton>
}