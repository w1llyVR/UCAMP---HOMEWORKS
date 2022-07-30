import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormPatients = (props) => {

    const bundleAdd = (event) =>{
        //console.log(e.target);
        // console.log(nombre, edad);
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        props.arreglo.push({ name :event.target[0].value, age: Number(event.target[1].value)})
        props.setValue(props.arreglo)
        console.log('arreglo', props.arreglo);
        // const form = event.currentTarget;
        // console.log('form',form);
        // console.log('xd');
    }

  return (
    <Form onSubmit={bundleAdd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control  type="text" placeholder="Ingrese un nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Edad" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  )
}

export default FormPatients