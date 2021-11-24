import React, { useState, useEffect, useContext } from 'react'

const DisplayContext = React.createContext();

export const UseDisplay = () => {
  return useContext(DisplayContext);
}

export default function DisplayContent({children}) {

  const [displayInput, setDisplayInput] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [afterEquel, setAfterEquel] = useState(false);

  const [sumValue, setSumValue] = useState('');
  const [subValue, setSubValue] = useState('');
  const [multValue, setMultValue] = useState('');
  const [divisionValue, setDivisionValue] = useState('');

  function numberClick(num) {
    if(afterEquel === true) {
      setDisplayInput('');
      setCurrentValue('');
      setAfterEquel(false);
    };
    if (displayInput.length < 12 || displayInput.length === undefined) {
    setDisplayInput(prev => prev + num);
    setCurrentValue(prev => prev + num);
  };
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
    setAfterEquel(false);
  }

  function backSpace() {
    setDisplayInput(prev => prev.substring(0, prev.length - 1));
  }

  function sum() {
    setAfterEquel(false);
    if(!sumValue) {
      setSumValue(displayInput);
      sumValue && sum();
      setCurrentValue(prev => prev + '+');
      setDisplayInput('');
    } else if (sumValue) {
        setDisplayInput(() => +sumValue + +displayInput)
        setSumValue('');
    }
  }

  function sub() {
    setAfterEquel(false);
    if(!subValue) {
      setSubValue(displayInput);
      subValue && sub();
      setCurrentValue(prev => prev + '-');
      setDisplayInput('');
    } else if (subValue) {
        setDisplayInput(() => +subValue - +displayInput)
        setSubValue('');
    }
  }

  function mult() {
    setAfterEquel(false);
    if(!multValue) {
      setMultValue(displayInput);
      multValue && mult();
      setCurrentValue(prev => prev + '*');
      setDisplayInput('');
    } else if (multValue) {
        setDisplayInput(() => +multValue * +displayInput)
        setMultValue('');
    }
  }

  function division() {
    setAfterEquel(false);
    if(!divisionValue) {
      setDivisionValue(displayInput);
      divisionValue && division();
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
    setAfterEquel(prev => !prev);
  }


  return <DisplayContext.Provider value={{displayInput, currentValue, numberClick, clear, backSpace, sum, sub, mult, division, equals}}>
    { children }
  </DisplayContext.Provider>
}