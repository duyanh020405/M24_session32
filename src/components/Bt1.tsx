import React, { useState } from 'react'

export default function Bt1() {
const [input,setInput]=useState<string>('')
const layInput =()=>{
    let newInp = document.getElementById("1") as HTMLInputElement
    if(newInp.value.toString() != null){
        setInput(newInp.value)
    }
    console.log(input);
    

}
  return (
    <div>
        <h4>Bai 1</h4>
      <input type="text" id='1'/>
      <button onClick={layInput}>Show</button>
    </div>
  )
}
