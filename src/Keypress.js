import React from 'react'
import { useState } from 'react'
const Keypress = () => {
    const [city , setCity] = useState("")

    const getCity = (e)=>{
        // if(e.key ==="Enter"){
        //   console.log("The city is", city);
          (e.key === "Enter") && <p>{city}</p>
        //}
    }
  return (
    <div>
      <input type="text" placeholder='Enter city' value={city} onChange={e=>setCity(e.target.value)} onKeyPress={getCity} />
      
    </div>
  )
}

export default Keypress
