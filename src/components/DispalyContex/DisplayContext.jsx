import React, { useState, useEffect, useContext } from 'react'

const DisplayContext = React.createContext();

export const UseDisplay = () => {
  return useContext(DisplayContext);
}

export default function DisplayContent({children}) {

  const [displayInput, setDisplayInput] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  const [sumValue, setSumValue] = useState('');
  const [subValue, setSubValue] = useState('');
  const [multValue, setMultValue] = useState('');
  const [divisionValue, setDivisionValue] = useState('');

  useEffect(() => {
    displayInput !== '' && setCurrentValue(prev => prev + displayInput);
  },[displayInput]);

  function numberClick(num) {
    displayInput.length < 10 && setDisplayInput(prev => prev + num);
  }

  function clear() {
    setDisplayInput('');
    setSumValue('');
    setSubValue('');
    setMultValue('');
    setDivisionValue('');
  }

  function backSpace() {
    setDisplayInput(prev => prev.substring(0, prev.length - 1));
  }

  function sum() {
    if(!sumValue) {
      setSumValue(displayInput);
      equals()
      setCurrentValue(prev => prev + '+');
      setDisplayInput('');
    } else if (sumValue) {
        setCurrentValue(prev => prev + '=');
        setDisplayInput(() => +sumValue + +displayInput)
        setSumValue('');
    }
  }

  function sub() {
    if(!subValue) {
      setSubValue(displayInput);
      equals()
      setCurrentValue(prev => prev + '-');
      setDisplayInput('');
    } else if (subValue) {
        setCurrentValue(prev => prev + '=');
        setDisplayInput(() => +subValue - +displayInput)
        setSubValue('');
    }
  }

  function mult() {
    if(!multValue) {
      setMultValue(displayInput);
      equals()
      setCurrentValue(prev => prev + '*');
      setDisplayInput('');
    } else if (multValue) {
        setCurrentValue(prev => prev + '=');
        setDisplayInput(() => +multValue * +displayInput)
        setMultValue('');
    }
  }

  function division() {
    if(!divisionValue) {
      setDivisionValue(displayInput);
      equals()
      setCurrentValue(prev => prev + '/');
      setDisplayInput('');
    } else if (divisionValue) {
        setCurrentValue(prev => prev + '=');
        setDisplayInput(() => +divisionValue / +displayInput)
        setDivisionValue('');
    }
  }

  function equals() {
    sumValue && sum();
    subValue && sub();
    multValue && mult();
    divisionValue && division();
  }


  return <DisplayContext.Provider value={{displayInput, currentValue, numberClick, clear, backSpace, sum, sub, mult, division, equals}}>
    { children }
  </DisplayContext.Provider>
}