import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
  const [number, setNumber] = useState(0)

  return (
    <div><Child person={number}/>
      <button onClick={()=>setNumber(number+1)}>set number</button>
    </div>
  )
}
