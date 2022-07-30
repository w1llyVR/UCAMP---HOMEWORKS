import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import Hello from './components/Hello';
import FormPatients from './components/FormPatients/FormPatients';
import React, { useState } from 'react';

const arr = [{
        name: "Willy",
        age: 19
    },
    {
        name: "Miguel",
        age: 20
    },
    {
        name: "Angie",
        age: 22
    }
]



function App() {
    const [arreglo, setArreglo] = useState(arr)

    return ( <
        div className = "App" >
        <
        Component / >
        <
        Hello name = "Willy" / >

        <
        h1 > USO DE MAP CON REACT < /h1> {
            arreglo.map((persona, i) => {
                return ( <
                    div key = { i } >
                    <
                    h1 > { persona.name } < /h1> <
                    p > { persona.age } < /p> <
                    /div>
                )
            })
        }

        <
        FormPatients arreglo = { arreglo }
        setValue = { setArreglo }
        /> <
        /div>
    );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';
import Component from './components/Component';
import Hello from './components/Hello';
import FormPatients from './components/FormPatients/FormPatients';
import React, { useState } from 'react';

const arr = [
  {
    name: "Willy",
    age: 19
  },
  {
    name: "Miguel",
    age: 20
  }
  ,
  {
    name: "Angie",
    age: 22
  }
]



function App() {
  const [arreglo, setArreglo] = useState(arr)

  return (
    <div className="App">
      <Component/>
      <Hello name="Willy"/>

      <h1>USO DE MAP CON REACT</h1>
      {
        arreglo.map((persona, i)=>{
          return (
            <div key={i}> 
               <h1>{persona.name}</h1>
              <p>{persona.age}</p>
            </div>
          )
        })
      }

      <FormPatients arreglo = {arreglo} setValue = {setArreglo}/>
    </div>
  );
}

export default App;

*/