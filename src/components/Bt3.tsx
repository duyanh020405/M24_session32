import React, { useState } from 'react'

export default function Bt3() {
  const [input,setInput]=useState<string>('')
  const show=()=>{
    let newInput = document.getElementById("date") as HTMLInputElement
    if(newInput.value.toString()!=null){
      setInput(newInput.value)
    }
  }
  return (
    <div>
      <h4>Bai 3</h4>
      <p>Ngay thang nam :{input}</p>
      <input type="date" id='date'/>
      <button onClick={show}>show</button>
    </div>
  )
}
