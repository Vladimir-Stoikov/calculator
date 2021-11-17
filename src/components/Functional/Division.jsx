import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const DivisionButton = styled.section`
  position: absolute;
  right: 73%;
  bottom: 51.8%;
`


export default function Division() {

  const { division } = UseDisplay();

  return <DivisionButton>
    <Ceil name='/' ceilFunc={ division }/>
    </DivisionButton>
}