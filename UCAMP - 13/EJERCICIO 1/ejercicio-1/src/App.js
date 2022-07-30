import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import InputColor from './Components/InputColor';
import TEXT from './Components/TEXT';
import InputNumber from './Components/InputNumber';
import { InputText } from './Components/InputText';



function App() {

  const [texts, setText] = useState('Hola')
  const [color, setColor] = useState('#1111')
  const [fontSize, setFont] = useState(14)

  return (
    <div className="App">
      <TEXT color styless = {{color, fontSize, texts} }/>
      {/* <h1 style={{color, fontSize}}>
        {texts}
      </h1> */}

      <InputColor setValue = {setColor}/>
      <br/><br/>
      <InputText setValue = {setText}/>
      <br/><br/>
      <InputNumber setValue={setFont} />
    </div>
  );
}

export default App;
