import React from 'react'


const SetText = (props) => {
    console.log(props.arreglo);
   
  return (
    props.arreglo.map((paciente) => {
      return(
        <h1 style={paciente.age < 18 ? {color: 'green'}: (paciente.age > 18 && paciente.age < 40) 
        ? {color: 'orange'} : (paciente.age > 40 && paciente.age < 70) ? {color:'yellow'} : {color:'pink'} }>{paciente.name}</h1>
      )
    })
    //<div>{props.arreglo[0].age < 18 ? 'hola' : 'adios'}</div>
  )
}

export default SetText