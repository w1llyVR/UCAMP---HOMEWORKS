import React from 'react'

const InputColor = ({setValue}) => {

  const handleColor = (e) => {
    console.log(e)
    setValue(e.target.value)
  }

  return (
    <input type="color" onChange={(e) =>{handleColor(e)}}/>
  )
}

export default InputColor