import React,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({formValue}) => {

    const [formState, setFormState] = useState({})

    const handleClick = () => {
        formValue(formState)
    }

    const setValues = (ev) => {
        console.log(ev)
        setFormState({
            ...formState, //Los "..." sirven para no crear repetidos y si ya existe solo se reemplaza el value (como set en c++)
            [ev.target.name]: ev.target.value
        })
    }
  return (

    <>
     {console.log('->>>',formState)}
     <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name = "nombre" onBlur={(ev)=>{setValues(ev)}} placeholder="Ingrese nombre" />
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" name = "edad" onBlur={(ev)=>{setValues(ev)}} placeholder="Ingrese edad" />
        <Form.Label>Altura</Form.Label>
        <Form.Control type="number" name = "altura" onBlur={(ev)=>{setValues(ev)}} placeholder="Ingrese altura" />
        <Form.Label>Motivo de la visita</Form.Label>
        <Form.Control type="text" name = "reason" onBlur={(ev)=>{setValues(ev)}} placeholder="Ingrese motivo" />
        </Form.Group>
        <Button variant="primary" onClick={()=>{handleClick()}}>
        Submit
        </Button>
    </Form>
    </>
   
  )
}

export default Formulario