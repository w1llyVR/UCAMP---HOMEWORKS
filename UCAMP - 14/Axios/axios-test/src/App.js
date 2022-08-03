import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import SaveApi from './Components/SaveApi';
import React, { useState } from 'react'

function App() {

    const [data, setData] = useState('')
    const [autor, setAutor] = useState('')



    //getQuotes();

    /* El useEffect solo se ejecuta una vez 
    useEffect(()=>{
      getQuotes()
    }, [])
    */


    return ( <
        div className = "App" >
        <
        SaveApi setData = { setData }
        setAutor = { setAutor }
        /> { <
            >
            <
            h1 style = {
                    { color: 'red' } } > { data } <
                /h1> <
                h1 > { autor } <
                /h1> <
                />

        }

        <
        /div>
    );
}

export default App;

/*


import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import SaveApi from './Components/SaveApi';
import React, {useState} from 'react'

function App() {

  const [data, setData] = useState('')
  const [autor, setAutor] = useState('')

  
 
  //getQuotes();


  return (
    <div className="App">
      <SaveApi setData = {setData} setAutor ={setAutor}/>
      {
        <>
         <h1 style={{color: 'red'}}>
          { data }
        </h1>
        <h1>
          { autor }
        </h1>
        </>
       
      }
      
    </div>
  );
}

export default App;
*/