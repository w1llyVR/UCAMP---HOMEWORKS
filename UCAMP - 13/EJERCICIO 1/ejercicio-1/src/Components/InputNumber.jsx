import React from 'react'

const InputNumber = ({setValue}) => {

    const handleNumber = (e) =>{
        console.log(e.target.value)
        setValue(Number(e.target.value))  
      }

  return (
    <input type="range" min="1" max = "100" defaultValue= "100" onChange={(e) => {handleNumber(e)}}/>
  )
}

export default InputNumber