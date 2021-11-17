import React from 'react'
import styled from 'styled-components'
import Ceil from '../Ceil'
import { UseDisplay } from '../DispalyContex/DisplayContext'

const DeleteButton = styled.section`
  position: absolute;
  right: 49.7%;
  bottom: 15%;
`


export default function Delete() {

  const { backSpace } = UseDisplay();

  return <DeleteButton>
    <Ceil name='⬅️' ceilFunc={ backSpace }/>
    </DeleteButton>
}