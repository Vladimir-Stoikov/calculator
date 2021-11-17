import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { UseDisplay } from './DispalyContex/DisplayContext'

const DisplaySt  = styled.input`
margin: 25px 16px;
padding: 10px;
border: none;
border-radius: 10px;
width: 12.7ch;
height: 100px;
font-family: 'Codystar', cursive;
font-size: 4rem;
background-color: #3B185F;
color: #FEC260;
text-align: right;
outline: none;
`


function Display() {
  const { displayInput } = UseDisplay();
  const [value, setValue] = useState(displayInput);

  useEffect(() => {
    setValue(displayInput);
  },[displayInput])

  return <>
    <DisplaySt type="text" name="cacl-input" id="cacl-input" value={value} autocomplete="off" readOnly/>
    <label htmlFor="cacl-input"></label>
  </>
}

export default Display;