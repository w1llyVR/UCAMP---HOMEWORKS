import React from 'react'
import axios from 'axios'

const SaveApi = (props) => {

    var resp
    const getQuotes = async () => {
        const url = 'https://www.breakingbadapi.com/api/quote/random' ///https://www.breakingbadapi.com/api/quote/random
        resp = await axios.get(url)
        console.log(typeof(resp),resp.data[0])
        props.setData(resp.data[0].quote)
        props.setAutor(resp.data[0].author)
        //console.log('data', data)
    }

  return (
    <>
        <div>SaveApi</div>
        <button style={{backgroundColor: 'yellow'}} onClick={getQuotes}>Agregar</button>
    </>
    
    
  )
}

export default SaveApi