import React from 'react'

export const InputText = ({setValue}) => {

    const handleChange = (e) =>{
        console.log(e)
        setValue(e.target.value)
      }
  return (
    <input type="text" onChange={(e) => {handleChange(e)}}/> 
  )
}
