import React from 'react'
import styled from 'styled-components'

const CeilStyled = styled.button`
  border: none;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.7rem;
  display: inline-block;
  width: ${props => props.width ? props.width : '100px'};
  height: 70px;
  padding: 18px 0;
  background-color: #FEC260;
  text-align: center;
  border-radius: 15px;
  margin: 8px;
  color: #3B185F;
  user-select: none;
  outline: none;
  &:hover {
    opacity: 0.90;
  }
  &:active {
   transform: scale(0.98);
  }
`


function Ceil({name, ceilFunc, props}) {
  return <CeilStyled {...props} onClick={ceilFunc}>{name}</CeilStyled>;
}

export default Ceil;
  
