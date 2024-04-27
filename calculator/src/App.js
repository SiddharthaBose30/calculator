import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [output,setOutput] = useState("");
  const [input,setInput] =useState("");
  function calculate(){
    try{
      const operators =['*','+','-','/','%'];
      let result=0;
      let operator=null;
      if (!input.trim()) return;
      for(let i=0;i<input.length;i++){
        if(operators.includes(input[i])){
          operator=input[i];
          break;
        }
      }
      if(!operator){
        setInput(parseFloat(input).toString());
        return;
      }
      const [operand1,operand2] = input.split(operator).map(parseFloat);
      switch(operator){
          case '+':
            result=operand1+operand2;
            break;
          case '-':
            result=operand1-operand2;
            break;
          case '*':
            result=operand1*operand2;
            break;
          case '/':
            if (operand2 === 0) {
              setInput('Error: Division by zero');
              return;
            }
            result=operand1/operand2;
            break;
          case '%':
            result=operand1%operand2;
            break;
              
      }
      setInput(result);
    }
    catch(error){
        setInput('please check your input');
    }
  }
  function isLastCharNumeric(str) {
    // Use a regular expression to test if the last character is numeric
    return /\d$/.test(str);
}
  function handleButtonClick(value){
    var lastChar = input[input.length-1];
    
    // Check if the last character is numeric
    if(!isLastCharNumeric(input) && lastChar != '+' && lastChar !='-' && lastChar !='%' && lastChar!='*' && lastChar!='/'){
      setInput("");
    }else if ((lastChar === '+' || lastChar ==='-' || lastChar ==='%' || lastChar ==='*' || lastChar ==='/') && (value === '+' || value ==='-' || value ==='%' || value ==='*' || value ==='/')){
       return;
    }
    if(value==='C'){
      setInput("");
    }else if(value==='<'){
      setInput(input.slice(0,-1));
    }else if(value==='='){
      calculate(value);
    }else{
      setInput((prevValue) =>prevValue+value);
    }
  }
  return (
    <div className='container'>
       <div className='calc'>
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={()=>{handleButtonClick('C')}}>C</button>
          <button onClick={()=>{handleButtonClick('<')}}>&lt;</button>
          <button onClick={()=>{handleButtonClick('%')}}>%</button>
          <button onClick={()=>{handleButtonClick('/')}}>/</button>
        </div>
        <div>
          <button onClick={()=>{handleButtonClick('7')}}>7</button>
          <button onClick={()=>{handleButtonClick('8')}}>8</button>
          <button onClick={()=>{handleButtonClick('9')}}>9</button>
          <button onClick={()=>{handleButtonClick('*')}}>*</button>
        </div>
        <div>
          <button onClick={()=>{handleButtonClick('4')}}>4</button>
          <button onClick={()=>{handleButtonClick('5')}}>5</button>
          <button onClick={()=>{handleButtonClick('6')}}>6</button>
          <button onClick={()=>{handleButtonClick('+')}}>+</button>
        </div>
        <div>
          <button onClick={()=>{handleButtonClick('1')}}>1</button>
          <button onClick={()=>{handleButtonClick('2')}}>2</button>
          <button onClick={()=>{handleButtonClick('3')}}>3</button>
          <button onClick={()=>{handleButtonClick('-')}}>-</button>
        </div>
        <div>
          <button onClick={()=>{handleButtonClick('0')}}>0</button>
          <button onClick={()=>{handleButtonClick('00')}}>00</button>
          <button onClick={()=>{handleButtonClick('.')}}>.</button>
          <button onClick={()=>{handleButtonClick('=')}}>=</button>
        </div>
       </div>
    </div>
  )
}

export default App