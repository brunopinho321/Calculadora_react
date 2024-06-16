import Input from "./components/Input";
import Button from "./components/Button";

import { Container , Content, Row} from "./styles";
import {useState} from 'react';


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev} ${number}`)
  }
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber).replace(/\s/g, ''));
      setCurrentNumber('')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber).replace(/\s/g, ''));
      console.log("First Number", currentNumber)
      setCurrentNumber('')
      setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      console.log(minus);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleMultiNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber).replace(/\s/g, ''));
      console.log("First Number", currentNumber)
      setCurrentNumber('')
      setOperation('x')
    }else {
      const minus = Number(firstNumber) * Number(currentNumber);
      console.log(minus);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleDiviNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber).replace(/\s/g, ''));
      setCurrentNumber('');
      setOperation('/')
    }else {
      if(Number(currentNumber) === 0){
        setCurrentNumber('error')
      } else {
        const divi = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(divi));
        setOperation('');
      }
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && String(currentNumber) !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiNumbers();
          break;
        case '/':
          handleDiviNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiNumbers}/>
          <Button label="/" onClick={handleDiviNumbers}/>
          <Button label="C" onClick={() => handleOnClear()}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
