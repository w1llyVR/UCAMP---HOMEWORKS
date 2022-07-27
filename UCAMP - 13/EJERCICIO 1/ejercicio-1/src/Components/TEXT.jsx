import React from 'react'

const TEXT = (props) => {
  const color = props.color
  const fontS = props.fontSize
  console.log('props',props);
  console.log(props.styless.texts);
  return (
    <h1 style={{
      color: props.styless.color,
      fontSize: props.styless.fontSize
    }}>{props.styless.texts}</h1>
  )
}

export default TEXT