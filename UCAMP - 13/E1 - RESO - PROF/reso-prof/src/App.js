import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario';
import { useState } from 'react';



function App() {


    const [patients, setPatients] = useState([]);

    const addPatient = (data) => {
        setPatients(
            [...patients, data]
        )
    }

    return ( <
        div className = "App" >
        <
        Formulario formValue = { addPatient }
        /> {
            patients.map((patient, i) => {
                return ( <
                    div key = { i } >
                    <
                    h3 > { patient.nombre } < /h3> <
                    h4 > { patient.edad } < /h4> <
                    h5 > { patient.altura } < /h5> <
                    h6 > { patient.reason } < /h6> <
                    /div>
                )
            })
        } <
        /div>
    );
}

export default App;


/*
import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Formulario';
import { useState } from 'react';



function App() {

  
const [patients, setPatients] = useState([]);

const addPatient = (data) =>{
  setPatients(
    [...patients,data]
  )
}

  return (
    <div className="App">
      <Formulario formValue = {addPatient}/>
      {
        patients.map((patient,i) => {
            return(
              <div key={i}>
                <h3>{patient.nombre}</h3>
                <h4>{patient.edad}</h4>
                <h5>{patient.altura}</h5>
                <h6>{patient.reason}</h6>
              </div>
            )
        })
      }
    </div>
  );
}

export default App;

*/