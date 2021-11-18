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

  function numberClick(num) {
    displayInput.length < 10 && setDisplayInput(prev => prev + num);
    setCurrentValue(prev => prev + num);
  }

  useEffect(() => {
    displayInput % 1 !== 0 && setDisplayInput(Math.round(displayInput * 100) / 100)
  }, [displayInput])

  function clear() {
    setDisplayInput('');
    setSumValue('');
    setSubValue('');
    setMultValue('');
    setDivisionValue('');
    setCurrentValue('');
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